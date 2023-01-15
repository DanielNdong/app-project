import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { Error404Component } from './pages/error404/error404.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'curriculum-vitae',component: CurriculumVitaeComponent},
  {path: 'formulario',component: FormularioComponent},
  {path: 'login',component: LoginComponent},
  {path: 'user',component: UserComponent},
  {path: 'error404',component: Error404Component},
  {path: '**', pathMatch: 'full', redirectTo: 'error404'},//En caso de escribir mal una direccion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
