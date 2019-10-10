import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncidentsService } from '../incidents.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-generarreporte',
  templateUrl: './generarreporte.component.html',
  styleUrls: ['./generarreporte.component.css'],
  providers: [IncidentsService]

})
export class GenerarreporteComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  onSubmit(form: NgForm) {
    console.log("asdf");
    console.log(form.value);
    this.incidentsService.register(form.value).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          this.resetForm(form);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }else{
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          }
        }
      );
    }

    resetForm(form: NgForm) {
      this.incidentsService.selectedIncident = {
        idIncidente: '',
        nivelImpacto: '',
        idEmpleado: '',
        idInvestigador: '',
        descripcion: '',
        fechaInicio: '',
        fechaFinal: '',
        estado: ''
          
      };
      form.resetForm();
      this.serverErrorMessages = '';
    }


    constructor(private incidentsService: IncidentsService, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/redirecter']);
  }

}
