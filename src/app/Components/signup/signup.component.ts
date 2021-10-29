import { Component, OnInit } from '@angular/core';
import { DarkmodeComponent } from '../darkmode/darkmode.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 1) {
      SignupComponent.darkmodeOn();
    } else {
      SignupComponent.darkmodeOff();
    }
  }

  static darkmodeOn() {
    const text_inputs = document.getElementsByClassName("text-input");
    const signup_div = document.getElementsByClassName("signup-div")[0];
    const emailme_label = document.getElementsByClassName("emailme-label")[0];
    if (text_inputs !== null && text_inputs !== undefined) {
      for(let i=0;i<text_inputs.length;i++) {
        text_inputs[i].classList.add("input-darkmode");
      }
    }
    if (signup_div !== undefined && signup_div !== null) {
      signup_div.classList.add("shadowbox-darkmode");
    }
    if (emailme_label !== undefined && emailme_label !== null) {
      emailme_label.classList.add("label-darkmode");
    }
  }

  static darkmodeOff() {
    const text_inputs = document.getElementsByClassName("text-input");
    const signup_div = document.getElementsByClassName("signup-div")[0];
    const emailme_label = document.getElementsByClassName("emailme-label")[0];
    if (text_inputs !== null && text_inputs !== undefined) {
      for(let i=0;i<text_inputs.length;i++) {
        text_inputs[i].classList.remove("input-darkmode");
      }
    }
    if (signup_div !== undefined && signup_div !== null) {
      signup_div.classList.remove("shadowbox-darkmode");
    }
    if (emailme_label !== undefined && emailme_label !== null) {
      emailme_label.classList.remove("label-darkmode");
    }
  }

}
