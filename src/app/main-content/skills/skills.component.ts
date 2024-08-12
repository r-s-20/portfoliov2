import { Component, inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

interface skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  translate = inject(TranslationService);
  skills: skill[] = [
    {
      name: 'HTML',
      icon: 'img/icons/html.svg',
    },
    {
      name: 'CSS',
      icon: 'img/icons/css.svg',
    },
    {
      name: 'JavaScript',
      icon: 'img/icons/javascript.svg',
    },
    {
      name: 'TypeScript',
      icon: 'img/icons/typescript.svg',
    },
    {
      name: 'Angular',
      icon: 'img/icons/angular.svg',
    },
    {
      name: 'GIT',
      icon: 'img/icons/git.svg',
    },
    {
      name: 'Rest-API',
      icon: 'img/icons/api.svg',
    },
    {
      name: 'Scrum',
      icon: 'img/icons/scrum.svg',
    },
  ];

  constructor() {}
}
