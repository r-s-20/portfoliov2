import { Injectable } from '@angular/core';
import { SinglePortfolioInterface } from '../interfaces/single-portfolio.interface';

@Injectable({
  providedIn: 'root',
})
export class FeaturedService {
  portfolios: SinglePortfolioInterface[] = [
    {
      title: 'Join',
      description: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.`,
      descriptionDe: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben im Team.',
      skills: ['CSS', 'HTML', 'Javascript', 'Firebase'],
      github: 'https://github.com/r-s-20/Join',
      livetest: 'https://r-s-dev.de/join/',
      image: 'img/previewJoin.svg',
      url: '',
    },
    {
      title: 'Sharky',
      description: `2D Jump'n-Run Game. Help Sharky fight the big Orca!\n This project has a focus on Object-Oriented-Programming and usage of modules.`,
      descriptionDe: `2d-Jump'n-Run Spiel.\n Hilf dem kleinen Hai Sharky, den großen Orka zu besiegen!`,
      skills: ['CSS', 'HTML', 'Javascript'],
      github: 'https://github.com/r-s-20/Sharky',
      livetest: 'https://r-s-dev.de/sharky/',
      image: 'img/previewSharky.svg',
      url: '',
    },
    {
      title: 'Pokédex',
      description: `Get information on Pokemon provided by the PokéAPI.`,
      descriptionDe: 'Ein Pokédex basierend auf der PokéAPI.',
      skills: ['Rest-API', 'CSS', 'HTML', 'Javascript'],
      github: '',
      livetest: '',
      image: 'img/previewPokedex.png',
      url: '',
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
    this.closePopup(popupId);
    this.showPopup(newId);
  }

  findNext(popupId: number) {
    if (popupId < this.portfolios.length-1) {
      return popupId += 1;
    } else return 0;
  }
}
