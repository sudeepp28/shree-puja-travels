import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-athird',
  standalone:false,
  templateUrl: './athird.component.html',
  styleUrl: './athird.component.css'
})
export class AthirdComponent {
@Output() open=new EventEmitter()

openPopup(){
  this.open.emit()
}
}
