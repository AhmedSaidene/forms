import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FPwdComponent } from './components/f-pwd/f-pwd.component';
import { InscriComponent } from './components/inscri/inscri.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inscri', component: InscriComponent},
  { path: 'forget-pwd', component: FPwdComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
