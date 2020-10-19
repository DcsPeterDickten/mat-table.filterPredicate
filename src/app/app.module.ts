import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { DateAdapter } from '@angular/material/core';
import { GermanDateAdapter } from './shared/germanDataAdapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactListModule,
    MaterialModule
  ],
  providers: [
    { provide: DateAdapter, useClass: GermanDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
