import { Component } from '@angular/core';
import { SkillIconComponent } from './skill-icon/skill-icon.component';

interface skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: skill[] = [
    {
      name: 'html',
      icon: 'img/icons/html.svg',
    },
    {
      name: 'css',
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
      name: 'git',
      icon: 'img/icons/git.svg',
    },
    {
      name: 'API',
      icon: 'img/icons/api.svg',
    },
    {
      name: 'Scrum',
      icon: 'img/icons/scrum.svg',
    },
  ];

  constructor() {}
}
