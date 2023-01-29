import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { HeaderUserComponent } from './components/headeruser/headeruser.component';
import { UserComponent } from './pages/user/user.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { MostrarSiDirective } from './directive/link-effect.directive';
import { ChangeColorInputDirective } from './directive/change-color-input.directive';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    HeaderUserComponent,
    UserComponent,
    LoginComponent,
    CardsComponent,
    FormularioComponent,
    CurriculumVitaeComponent,
    MostrarSiDirective,
    ChangeColorInputDirective,
    AnimeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
