import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  lang: 'EN' | 'DE' = 'EN';
  translate =inject(TranslationService);

  toggleLang() {
    if (this.lang == 'EN') {
      this.lang = 'DE';
      this.translate.switchLanguage('de');
    } else {

      this.lang = 'EN';
      this.translate.switchLanguage('en');
    }
    console.log(this.lang);
  }
}
