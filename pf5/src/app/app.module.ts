import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PfolioComponent } from './pfolio-head/pfolio.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './Intro/intro.component';
import { StyleSharingService } from './stylesharing.service';
import { PfolioBodyComponent } from './pfolio-body/pfolio-body.component';
import { ViewportModule } from 'angular2-viewport';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PfolioComponent,
    PfolioBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewportModule
  ],
  providers: [StyleSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
