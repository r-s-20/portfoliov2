import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  policyChecked = false;

  togglePolicyCheck() {
    if (this.policyChecked) {
      this.policyChecked = false;
    } else {
      this.policyChecked = true;
    }
  }
}
