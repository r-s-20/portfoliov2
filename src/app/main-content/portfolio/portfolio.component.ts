import { Component, inject } from '@angular/core';
import { FeaturedService } from '../../shared/services/featured.service';
import { SinglePopupComponent } from './single-popup/single-popup.component';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SinglePopupComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  featured = inject(FeaturedService);
  translate = inject(TranslationService);
}
