import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../incidents.service';


@Component({
  selector: 'app-lista-incidentes',
  templateUrl: './lista-incidentes.component.html',
  styleUrls: ['./lista-incidentes.component.css'],
  providers: [IncidentsService]
})
export class ListaIncidentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
