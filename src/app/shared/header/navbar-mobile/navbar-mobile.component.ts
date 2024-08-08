import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
})
export class NavbarMobileComponent {
  translate = inject(TranslationService);

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
  heroAnimation: boolean = false;

  toggleAnimation() {}
}
