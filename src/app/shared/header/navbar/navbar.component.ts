import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  lang: 'EN' | 'DE' = 'EN';

  toggleLang() {
    if (this.lang == 'EN') {
      this.lang = 'DE';
    } else this.lang = 'EN';
    console.log(this.lang);
  }
}
