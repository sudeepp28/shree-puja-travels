import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-afirst',
  standalone:false,
  templateUrl: './afirst.component.html',
  styleUrl: './afirst.component.css'
})
export class AfirstComponent {
@Output() open=new EventEmitter()
openPopup(){
  this.open.emit()
}
}
