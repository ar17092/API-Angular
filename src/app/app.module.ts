import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,components } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    components,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
