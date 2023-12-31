import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './global/footer/footer.component';
import { FormularyComponent } from './formulary/formulary.component';
import { HeaderComponent } from './global/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormularyComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
