import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../footer/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavbarComponent, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
translate = inject(TranslationService)
}
