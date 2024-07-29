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
    let uncheckedIcon = document.getElementById('unchecked');
    let checkedIcon = document.getElementById('checked');
    if (this.policyChecked) {
      this.policyChecked = false;
      checkedIcon?.classList.add("d-none");
      uncheckedIcon?.classList.remove("d-none");
    } else {
      this.policyChecked = true;
      checkedIcon?.classList.remove("d-none");
      uncheckedIcon?.classList.add("d-none");
    }
  }
}
