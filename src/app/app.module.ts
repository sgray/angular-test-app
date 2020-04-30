import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AirbrakeErrorHandler } from './airbrake-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: ErrorHandler, useClass: AirbrakeErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
