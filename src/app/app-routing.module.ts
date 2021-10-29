import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ItemsComponent } from './Components/items/items.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: WelcomePageComponent},
  {path:'login', component:  LoginComponent},
  {path:'signup', component:  SignupComponent},
  {path:'home', component: ItemsComponent},
  {path:'courses', component: CoursesComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
