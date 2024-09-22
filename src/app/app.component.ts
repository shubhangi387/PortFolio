import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  // Flag to track the mobile menu state
  isMenuOpen = false;

  // Toggle function for the mobile menu
  toggleMenu() {
    console.log('its clicked');
    this.isMenuOpen = !this.isMenuOpen;
  }
}
