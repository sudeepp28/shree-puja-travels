import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hfirst',
  standalone:false,
  templateUrl: './hfirst.component.html',
  styleUrl: './hfirst.component.css'
})
export class HfirstComponent {
 @Output() open=new EventEmitter()
goToBooking(){
this.open.emit()
}

}
