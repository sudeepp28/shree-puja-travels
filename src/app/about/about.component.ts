import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone:false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
ispopup=false
openpopup(){
  this.ispopup=true
}
closepopup(){
  this.ispopup=false
}
}
