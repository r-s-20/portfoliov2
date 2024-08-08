import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  lang: 'EN' | 'DE' = 'EN';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

   public switchLanguage(language:string):void {
    this.translate.use(language);
   }

   public toggleLang():void {
    if (this.lang == 'EN') {
      this.lang = 'DE';
      this.switchLanguage('de');
    } else {

      this.lang = 'EN';
      this.switchLanguage('en');
    }
  }

}
