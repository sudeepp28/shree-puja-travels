import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone:false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
ispopup=false;

openpopup(){
this.ispopup=true
}
closepopup(){
  this.ispopup=false
}
}
