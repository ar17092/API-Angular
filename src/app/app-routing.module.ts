import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./vistas/login/login.component";
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { SignupComponent } from './vistas/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'signup', component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components = [LoginComponent,DashboardComponent,SignupComponent]
