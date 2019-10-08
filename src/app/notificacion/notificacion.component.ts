import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent  {
  
  

  constructor(public MessageService: MessageService) {

  }
  contactForm(form) {
    this.MessageService.sendMessage(form).subscribe(() => {
      console.log("Sisas")
    });
  }
}