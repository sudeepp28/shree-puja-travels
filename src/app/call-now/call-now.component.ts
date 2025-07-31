import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-call-now',
  standalone:false,
  templateUrl: './call-now.component.html',
  styleUrl: './call-now.component.css'
})
export class CallNowComponent {
@Output() close = new EventEmitter<void>();

  adminPhone: string = '+919100390049';
  prefilledText: string = encodeURIComponent('Hi, I would like to book a cab with My Journey Cabs.');

  closePopup() {
    this.close.emit();
  }
}
