import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslationService } from './shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContentComponent,
    ImprintComponent,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
  translate = inject(TranslationService);
  // translate.setDefaultLang('en');
}
