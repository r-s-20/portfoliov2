import { Component, inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  translate = inject(TranslationService);
  currentRef: number = 0;

  references: { partner: string; quote: string; project?: string }[] = [
    {
      partner: 'Ismail Gündogdu',
      quote:
        'Robin is a liable team partner with a great knowledge. He is very supportive and open minded. He is willing to take ownership of difficult tasks and his problem solving attitude is an excellent asset for every team.',
      project: 'Join',
    },
    {
      partner: 'You?',
      quote: "I'd love to get some feedback by you if we work together!",
    },
    {
      partner: '?',
      quote: '?',
    },
  ];

  getPreviousIndex() {
    if (this.currentRef == 0) {
      return this.references.length - 1;
    }
    return this.currentRef - 1;
  }

  getNextIndex() {
    if (this.currentRef == this.references.length-1) {
      return 0;
    }
    return this.currentRef + 1;
  }



  nextRef() {
    this.currentRef++;
    if (this.currentRef > this.references.length - 1) {
      this.currentRef = 0;
    }
  }

  previousRef() {
    this.currentRef--;
    if (this.currentRef < 0) {
      this.currentRef = this.references.length - 1;
    }
  }
}
