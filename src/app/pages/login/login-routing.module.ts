import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import {SplashComponent} from './splash/splash.component';
import {ConfirmComponent} from './confirm/confirm.component';

const routes: Routes = [
  {
    path:'confirm',
    component:ConfirmComponent
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path:'',
    component:SplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
