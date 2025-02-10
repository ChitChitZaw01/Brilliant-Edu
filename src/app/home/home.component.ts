import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [MatCard,
    MatToolbarModule,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}