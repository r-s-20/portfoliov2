import { Injectable } from '@angular/core';
import { SinglePortfolioInterface } from '../interfaces/single-portfolio.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  portfolios: SinglePortfolioInterface[] = [
    {
      title: 'Join',
      description: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.`,
      skills: ['CSS', 'HTML', 'Javascript', 'Firebase'],
      github: '',
      livetest: '',
    },
    {
      title: 'Sharky',
      description: `2D Jump'n-Run Game. Help Sharky fight the big Orca!\n This project has a focus on Object-Oriented-Programming and usage of modules.`,
      skills: ['CSS', 'HTML', 'Javascript'],
      github: '',
      livetest: '',
    },
  ];
  constructor() {}
  closePopup(popupId: number) {
    let curtain = document.getElementById(`${popupId}`);
    curtain?.classList.add('d-none');
  }

  showPopup(popupId: number) {
    let curtain = document.getElementById(`${popupId}`);
    curtain?.classList.remove('d-none');
  }

  showNext(popupId: number) {
    let newId = this.findNext(popupId);
    console.log('show next works', newId);
    this.closePopup(popupId);
    this.showPopup(newId);
  }

  findNext(popupId: number) {
    if (popupId < this.portfolios.length-1) {
      return popupId += 1;
    } else return 0;
  }
}
