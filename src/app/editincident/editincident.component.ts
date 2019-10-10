import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../incidents.service'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editincident',
  templateUrl: './editincident.component.html',
  styleUrls: ['./editincident.component.css'],
   providers: [IncidentsService]
})
export class EditincidentComponent implements OnInit {
  incident:any={};
  sub: Subscription;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private route: ActivatedRoute,private router: Router, private incidentsService: IncidentsService) { }

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


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const _id = params['idIncident'];
      if(_id){
        this.incidentsService.get(_id).subscribe((incident: any) => {
          if(incident){
            this.incident=incident;
            this.incident.href = incident._id.self.href;
            console.log("sisaszxvcxz",incident);

          }
          else{
            console.log("MF(T");

          }

        });
      }
    });
  }


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

  

}

