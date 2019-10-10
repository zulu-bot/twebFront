import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../incidents.service';
import { log } from 'util';
import { Incidents } from '../shared/incidents.model';


@Component({
  selector: 'app-lista-incidentes',
  templateUrl: './lista-incidentes.component.html',
  styleUrls: ['./lista-incidentes.component.css'],
  providers: [IncidentsService]
})
export class ListaIncidentesComponent implements OnInit {
  incidents: Array<string> ;
  bucket: any[]=[];

  constructor(private incidentsService:IncidentsService) { }

  ngOnInit() {
    this.incidentsService.getAll().subscribe(data => {
      this.incidents = data;
      console.log("sisas",this.incidents);
      
    });
    
    
}

}
