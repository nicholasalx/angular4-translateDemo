import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoadingModule } from 'ngx-loading';
import { NgxUIModule } from '@swimlane/ngx-ui';
import '@swimlane/ngx-ui/dist/app.css';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoadingModule,
    NgxUIModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
