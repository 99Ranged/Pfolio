import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PfolioComponent } from './pfolio.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PfolioComponent]
})
export class AppModule { }
