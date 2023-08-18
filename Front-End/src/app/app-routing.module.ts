import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Components/Forms/Sign Up/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',loadComponent:()=>import("./Components/landing-page/landing-page.component").then(mod=>mod.LandingPageComponent)},
  {path:'home',loadComponent:()=>import("./home-page/home-page.component").then(mod=>mod.HomePageComponent)},
  {path:'sign-up',loadComponent:()=>import("./Components/Forms/Sign Up/sign-up/sign-up.component").then(mod=>mod.SignUpComponent)},
  {path:'sign-in',loadComponent:()=>import("./Components/Forms/sign-in/sign-in.component").then(mod=>mod.SignInComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
