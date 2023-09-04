import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { StatusComponent } from './status/status.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
//import { AccessModule } from './access/access.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddContactComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    //AccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
