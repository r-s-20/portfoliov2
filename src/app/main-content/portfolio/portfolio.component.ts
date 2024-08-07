import { Component, inject } from '@angular/core';
import { FeaturedService } from '../../shared/services/featured.service';
import { SinglePopupComponent } from './single-popup/single-popup.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SinglePopupComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  featured = inject(FeaturedService);
}
