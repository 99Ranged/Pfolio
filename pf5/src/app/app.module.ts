import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PfolioComponent } from './pfolio-head/pfolio.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './Intro/intro.component';
import { StyleSharingService } from './stylesharing.service';
import { PfolioBodyComponent } from './pfolio-body/pfolio-body.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PfolioComponent,
    PfolioBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StyleSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
