import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule, 
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  goToHome() {
    // Trigger any logic before navigating
    console.log('Navigating to Home page...');
    this.router.navigate(['/']);  // Programmatically navigate
  }
  goToAbout() {
    // Trigger any logic before navigating
    console.log('Navigating to About Us page...');
    this.router.navigate(['/about']);  // Programmatically navigate
  }
  
  goToCourses() {
    // Trigger any logic before navigating
    console.log('Navigating to courses page...');
    this.router.navigate(['/courses']);  // Programmatically navigate
  }
  
  goToCotact() {
    // Trigger any logic before navigating
    console.log('Navigating to contact page...');
    this.router.navigate(['/contact']);  // Programmatically navigate
  }

}
