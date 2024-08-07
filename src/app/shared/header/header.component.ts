import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { NavbarMobileComponent } from "./navbar-mobile/navbar-mobile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, RouterModule, NavbarMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
