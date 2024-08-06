import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
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

  closePopup(popupId:string){
    let curtain = document.getElementById(popupId);
    curtain?.classList.add("d-none");
  }

  showPopup(popupId:string){
    let curtain = document.getElementById(popupId);
    curtain?.classList.remove("d-none");
  }
}
