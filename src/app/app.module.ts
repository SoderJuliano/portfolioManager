import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponent2 } from './meuComponent';
import { AppComponent3 } from './meuComponent2';
import { AppComponent4 } from './meuComponent3';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    AppComponent3,
    AppComponent4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponent2, AppComponent3, AppComponent4]
})
export class AppModule { }
