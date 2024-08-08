import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
translate = inject(TranslationService);
}
