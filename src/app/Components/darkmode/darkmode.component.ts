import { Component, OnInit } from '@angular/core';
import { HostListener  } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { ItemsComponent } from "../items/items.component";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { CoursesComponent } from "../courses/courses.component";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {
  darkModeOn:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.darkModeOn) {
      document.getElementById("switch").click();
    }
  }

  /**********Turning dark mode on in all components **********/
  darkmode(){
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 0) {
      HeaderComponent.darkmodeOn();
      SidebarComponent.darkmodeOn();
      PageNotFoundComponent.darkmodeOn();
      ItemsComponent.darkmodeOn();
      LoginComponent.darkmodeOn();
      SignupComponent.darkmodeOn();
      CoursesComponent.darkmodeOn();
    } else {
      HeaderComponent.darkmodeOff();
      SidebarComponent.darkmodeOff();
      PageNotFoundComponent.darkmodeOff();
      ItemsComponent.darkmodeOff();
      LoginComponent.darkmodeOff();
      SignupComponent.darkmodeOff();
      CoursesComponent.darkmodeOff();
    }
  }

}
