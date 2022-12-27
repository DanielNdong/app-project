import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { HeaderUserComponent } from './components/headeruser/headeruser.component';
import { UserComponent } from './pages/user/user.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    HeaderUserComponent,
    UserComponent,
    CardsComponent,
    FormularioComponent,
    CurriculumVitaeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
