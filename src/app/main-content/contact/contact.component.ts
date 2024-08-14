import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  translate = inject(TranslationService);

  mailTest = true;

  showConfirmation = false;
  policyChecked = false;
  formVerified = false;
  contactData: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://r-s-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  checkModel(model: NgModel) {
    return model.valid;
  }

  togglePolicyCheck() {
    if (this.policyChecked) {
      this.policyChecked = false;
    } else {
      this.policyChecked = true;
    }
  }

  getPlaceholderName(name: NgModel) {
    if (!name.valid && name.touched) {
      if (this.translate.lang == 'DE') {
        return 'Bitte einen Namen eingeben';
      }
      return 'Oops! Looks like your name is missing!';
    }
    if (this.translate.lang == 'DE') {
      return 'Ihre Nachricht';
    }
    return 'Your name';
  }

  getPlaceholderMessage(message: NgModel) {
    if (!message.valid && message.touched) {
      if (this.translate.lang == 'DE') {
        return 'Bitte eine Nachricht eingeben';
      }
      return 'Please enter e message';
    }
    if (this.translate.lang == 'DE') {
      return 'Ihre Nachricht';
    }
    return 'Your message';
  }

  getPlaceholderEmail(email: NgModel) {
    if (!email.valid && email.touched) {
      // if (this.translate.lang == 'DE') {
      //   return 'Bitte eine gültige Email-Adresse eingeben';
      // }
      // return "Oops! Looks like something's wrong with that email!";
      return '';
    }
    if (this.translate.lang == 'DE') {
      return 'Ihre Email';
    }
    return 'Your email';
  }

  submitData(ngForm: NgForm, email: NgModel, name: NgModel, message: NgModel) {
    if (!this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            name.reset();
            email.reset();
            message.reset();
            this.policyChecked = false;
            this.showConfirmation=true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      ngForm.resetForm();
      name.reset();
      email.reset();
      message.reset();
      this.policyChecked = false;
      this.showConfirmation=true;
      console.log('running on locale server - not sending');
    }
  }
}
