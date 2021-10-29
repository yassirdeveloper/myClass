import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { DarkmodeComponent } from './Components/darkmode/darkmode.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ItemsComponent } from './Components/items/items.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CoursesComponent } from './Components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DarkmodeComponent,
    SidebarComponent,
    PageNotFoundComponent,
    ItemsComponent,
    WelcomePageComponent,
    LoginComponent,
    SignupComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
