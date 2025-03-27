import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;

  toggleMenu(): void {
    console.log('isMenuOpen', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }

}
