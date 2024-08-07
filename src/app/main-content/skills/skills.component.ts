import { Component } from '@angular/core';

interface skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
