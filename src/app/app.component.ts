import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
