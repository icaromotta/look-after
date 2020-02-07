import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './pages/info/info.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CardComponent } from './shared/card/card.component';
import { RegisterComponent } from './shared/forms/register/register.component';
import { LoginComponent } from './shared/forms/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    InfoComponent,
    CarouselComponent,
    CardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
