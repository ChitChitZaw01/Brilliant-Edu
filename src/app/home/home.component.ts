import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [MatCard,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}