import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  products = [
    {
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with USB receiver.',
      price: '$25.99',
      image: 'images/it2.jpg'
    },
    {
      name: 'Bluetooth Headphones',
      description: 'Noise-canceling Bluetooth headphones.',
      price: '$79.99',
      image: 'images/it2.jpg'
    },
    {
      name: 'Laptop Stand',
      description: 'Adjustable laptop stand for ergonomics.',
      price: '$34.99',
      image: 'images/it2.jpg'
    },
    {
      name: 'Smartphone Case',
      description: 'Durable silicone case for smartphones.',
      price: '$19.99',
      image: 'images/it2.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}