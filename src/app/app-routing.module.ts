import { PanelComponent } from './pages/panel/panel.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/forms/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './shared/forms/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'sobre',
    component: AboutComponent
  }, {
    path: 'contato',
    component: ContactComponent
  }, {
    path: 'cadastro',
    component: RegisterComponent
  }, {
    path: 'acesso',
    component: LoginComponent
  }, {
    path: 'painel',
    component: PanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
