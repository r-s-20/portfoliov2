import { Component, inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  translate = inject(TranslationService);
  
  aboutList: {text: string, url: string}[] = [
    {
      text: '',
      url: 'img/icons/location.svg',
    },
    {
      text: '',
      url: 'img/icons/bulb.svg',
    },
    {
      text: '',
      url: 'img/icons/puzzle.svg',
    },

  ];
  constructor() {}
}
