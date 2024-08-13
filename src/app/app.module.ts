import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//configuracion del locale de la app

import localesEsHN from '@angular/common/locales/es-HN'
import localesEsFR from '@angular/common/locales/fr-CA'
import localesEsCL from '@angular/common/locales/es-CL'


import { registerLocaleData } from '@angular/common';

registerLocaleData(localesEsHN);
registerLocaleData(localesEsFR);
registerLocaleData(localesEsCL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
