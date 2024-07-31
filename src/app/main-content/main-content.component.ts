import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { AboutComponent } from "./about/about.component";
import { HeroComponent } from "./hero/hero.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillsComponent } from "./skills/skills.component";
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, AboutComponent, HeroComponent, PortfolioComponent, ContactComponent, SkillsComponent, ReferencesComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
