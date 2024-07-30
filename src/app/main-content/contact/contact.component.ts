import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
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
