import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
