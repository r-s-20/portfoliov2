import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  translate = inject(TranslationService);

  mailTest = true;

  policyChecked = false;
  formVerified = false;
  contactData: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'http://r-s-dev.de/mailTestProject/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  togglePolicyCheck() {
    if (this.policyChecked) {
      this.policyChecked = false;
    } else {
      this.policyChecked = true;
    }
  }

  getPlaceholderName(name: NgModel) {
    if (this.translate.lang == 'EN') {
      if (!name.valid && name.touched) {
        return 'Please enter a name';
      }
      return 'Your name';
    } else if (this.translate.lang == 'DE') {
      if (!name.valid && name.touched) {
        return 'Bitte eine Nachricht eingeben';
      }
      return 'Ihre Nachricht';
    }
    return 'Your name';
  }

  getPlaceholderMessage(message: NgModel) {
    if (this.translate.lang == 'EN') {
      if (!message.valid && message.touched) {
        return 'Please enter a message';
      }
      return 'Your message';
    } else if (this.translate.lang == 'DE') {
      if (!message.valid && message.touched) {
        return 'Bitte eine Nachricht eingeben';
      }
      return 'Ihre Nachricht';
    }
    return 'Your message';
  }

  getPlaceholderEmail(email: NgModel) {
    if (this.translate.lang == 'EN') {
      if (!email.valid && email.touched) {
        return 'Please enter a valid email-address';
      }
      return 'Your email';
    } else if (this.translate.lang == 'DE') {
      if (!email.valid && email.touched) {
        return 'Bitte eine gültige Email-Adresse eingeben';
      }
      return 'Ihre Email';
    }
    return 'Your email';
  }

  submitData(ngForm: NgForm) {
    console.log(this.contactData);

    if (!this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // ngForm.resetForm();
            alert(
              'Thank you for your mail! I will get back to you as soon as possible.'
            );
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      console.log('running on locale server - not sending');
      ngForm.resetForm();
    }
  }
}
