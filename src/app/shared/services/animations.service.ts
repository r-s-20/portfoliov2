import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  animateHero: boolean = true;

  constructor() { }
  toggleAnimation() {
    console.log(this.animateHero);
    if (this.animateHero) this.animateHero = false;
    else this.animateHero=true;
  }
}
