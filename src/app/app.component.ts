import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public loading = false;
  public toggleChk = false;
  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.initTranslate()
    this.loading = true;
  }

  initTranslate() {
  	this.translate.addLangs(["en", "zh"]);
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }
  }
}
