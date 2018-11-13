import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NinjaGoldService } from './ninja-gold.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //added

  ],
  providers: [NinjaGoldService], //added
  bootstrap: [AppComponent]
})
export class AppModule { }
