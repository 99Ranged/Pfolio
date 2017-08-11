import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PfolioComponent } from './Pfolio/pfolio.component';
import { AppComponent } from './app.component';
import { IntroComponent } from './Intro/intro.component';
import { StyleSharingService } from './stylesharing.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StyleSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
