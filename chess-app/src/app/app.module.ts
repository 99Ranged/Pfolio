import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablematrixComponent } from './tablematrix/tablematrix.component';

@NgModule({
  declarations: [
    AppComponent,
    TablematrixComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
