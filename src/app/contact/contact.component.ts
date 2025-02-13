import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { CommonModule } from '@angular/common'; 
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  model = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitted = false;

  onSubmit() {
    const formData = {
      name: this.model.name,
      email: this.model.email,
      message: this.model.message,
    };

    this.submitForm(formData);
  }

  submitForm(formData: any) {
    const url = 'https://formsubmit.co/ajax/chitchitzaw.as16@gmail.com';
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          this.isSubmitted = true;
          this.resetForm();
        } else {
          console.error('Error submitting form:', response);
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  }

  resetForm() {
    this.model = { name: '', email: '', message: '' };
  }
  }