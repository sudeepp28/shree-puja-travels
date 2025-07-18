import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone:false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
onSubmit(form: any) {
  if (form.valid) {
    console.log('Form Submitted:', form.value);
    alert('Thanks! We will get back to you soon.');
    form.reset();
  }
}

}
