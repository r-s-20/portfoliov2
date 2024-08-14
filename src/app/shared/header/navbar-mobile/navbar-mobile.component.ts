import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
})
export class NavbarMobileComponent {
  translate = inject(TranslationService);
  animations=inject(AnimationsService);

  heroAnimation = this.animations.animateHero;

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
  toggleAnimation() {
    this.animations.toggleAnimation();
  }
}
