import { Component, OnInit } from '@angular/core';
import { DarkmodeComponent } from '../darkmode/darkmode.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 1) {
      LoginComponent.darkmodeOn();
    } else {
      LoginComponent.darkmodeOff();
    }
  }

  static darkmodeOn() {
    const email_input = document.getElementById("user-email-input");
    const password_input = document.getElementById("user-password-input");
    const login_div = document.getElementsByClassName("login-div")[0];
    const stay_label = document.getElementsByClassName("stay-label")[0];
    if (email_input !== undefined && email_input !== null) {
      email_input.classList.add("input-darkmode");
    }
    if (password_input !== undefined && password_input !== null) {
      password_input.classList.add("input-darkmode");
    }
    if (login_div !== undefined && login_div !== null) {
      login_div.classList.add("shadowbox-darkmode");
    }
    if (stay_label !== undefined && stay_label !== null) {
      stay_label.classList.add("label-darkmode");
    }
  }

  static darkmodeOff() {
    const email_input = document.getElementById("user-email-input");
    const password_input = document.getElementById("user-password-input");
    const login_div = document.getElementsByClassName("login-div")[0];
    const stay_label = document.getElementsByClassName("stay-label")[0];
    if (email_input !== undefined && email_input !== null) {
      email_input.classList.remove("input-darkmode");
    }
    if (password_input !== undefined && password_input !== null) {
      password_input.classList.remove("input-darkmode");
    }
    if (login_div !== undefined && login_div !== null) {
      login_div.classList.remove("shadowbox-darkmode");
    }
    if (stay_label !== undefined && stay_label !== null) {
      stay_label.classList.remove("label-darkmode");
    }
  }

}
