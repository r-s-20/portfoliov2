import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
})
export class NavbarMobileComponent {
  showMenu: boolean = false;
  openMenu() {
    this.showMenu = true;
  }
  closeMenu() {
    this.showMenu = false;
  }
  toggleMenu() {
    if (this.showMenu) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }
  lang: 'EN' | 'DE' = 'EN';
  heroAnimation: boolean = false;

  toggleLang() {
    if (this.lang == 'EN') {
      this.lang = 'DE';
    } else this.lang = 'EN';
    console.log(this.lang);
  }

  toggleAnimation() {

  }
}
