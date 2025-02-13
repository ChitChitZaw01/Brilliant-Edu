import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,
    FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor() {}

  onSubmit() {
    // You can replace the 'url' with your FormSubmit service URL.
    const formData = new FormData();
    formData.append('name', 'Name goes here');
    formData.append('email', 'Email goes here');
    formData.append('message', 'Message goes here');
    
    fetch('https://formsubmit.co/ajax/chitchitzaw.as16@gmail.com', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success, show message to user, etc.
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error, show error message, etc.
    });
  }
  }