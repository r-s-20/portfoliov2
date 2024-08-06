import { Component, inject } from '@angular/core';
import { PopupService } from '../../shared/services/popup.service';
import { SinglePopupComponent } from './single-popup/single-popup.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SinglePopupComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  popupService = inject(PopupService);

  projects = [
    {
      name: 'Join',
      skills: 'HTML, CSS, Javascript, Supabase',
      url: '',
    },
    {
      name: 'Sharky',
      skills: 'OOP, HTML, CSS, Javascript',
      url: '',
    },
    {
      name: 'Pokédex',
      skills: 'Rest-API, HTML, CSS, Javascript',
      url: '',
    },
  ];
}
