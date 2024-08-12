import { Component, inject, Input } from '@angular/core';
import { FeaturedService } from '../../../shared/services/featured.service';
import { SinglePortfolioInterface } from '../../../shared/interfaces/single-portfolio.interface';
import { TranslationService } from '../../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-popup',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './single-popup.component.html',
  styleUrl: './single-popup.component.scss',
})
export class SinglePopupComponent {
  @Input() num: number = 0;
  @Input() portfolio: SinglePortfolioInterface = {
    title: '',
    description: '',
    skills: [''],
    github: '',
    livetest: '',
    image: '',
    url: '',
  };
  featured = inject(FeaturedService);
  translate = inject(TranslationService);
}
