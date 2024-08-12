import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    NavbarMobileComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translate = inject(TranslationService);
  hovering = false;

  hoverOn() {
    this.hovering=true;
  }

  hoverOff(){
    this.hovering=false;
  }
}
