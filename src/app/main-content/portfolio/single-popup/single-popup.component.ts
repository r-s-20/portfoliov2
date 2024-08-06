import { Component, inject, Input } from '@angular/core';
import { PopupService } from '../../../shared/services/popup.service';
import { SinglePortfolioInterface } from '../../../shared/interfaces/single-portfolio.interface';

@Component({
  selector: 'app-single-popup',
  standalone: true,
  imports: [],
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
  };
  popupService = inject(PopupService);
}
