import { Component } from '@angular/core';

@Component({
  selector: 'app-cfirst',
  standalone:false,
  templateUrl: './cfirst.component.html',
  styleUrl: './cfirst.component.css'
})
export class CfirstComponent {
 adminPhone: string = '+919100390049';
  prefilledText: string = encodeURIComponent('Hi, I would like to book a cab with My Journey Cabs.');
  email='shreepujatraveldesk@gmail.com'
}
