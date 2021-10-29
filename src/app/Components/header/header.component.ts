import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggleMenu', [
      state('inactive', style({
        transform: 'translateY(-435px)', visibility: 'hidden', opacity: '0'
      })),
      state('active', style({
        transform: 'translateY(0px)', opacity: '1'
      })),
      transition('active <=> inactive', animate('400ms ease-in-out'))
  ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //adjusting to mobile view
    var x = window.matchMedia("(max-width: 800px)");
    this.mobileview(x);
    x.addListener(this.mobileview);

  }

  /*********** Dark Mode **********/
  //header dark mode on
  static darkmodeOn() {
    document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0].classList.add("zero-opacity");
    document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0].classList.add("display-none");
    document.getElementsByClassName("logo")[0].getElementsByTagName("img")[1].classList.remove("zero-opacity");
    document.getElementsByClassName("logo")[0].getElementsByTagName("img")[1].classList.remove("display-none");
    document.getElementsByClassName("header")[0].classList.add("header-darkmode");
    document.getElementsByClassName("header")[0].classList.remove("lightmode-bg");
    document.getElementsByClassName("header")[0].classList.add("darkmode-bg");
    let txt_elements = document.getElementsByClassName("lightmode-txt");
    for(let i=0;i<txt_elements.length;i++) {
      txt_elements[i].classList.add("darkmode-txt");
    }
    document.getElementById("login").classList.remove("login-lightmode");
    document.getElementById("login").classList.add("login-darkmode");
    document.getElementById("hamburger-white").style.opacity = "1";
    document.getElementById("hamburger-black").style.opacity = "0";
    //mobile menu dark mode on
    let elements_txt = document.getElementsByClassName("menu-a");
    for(let i=0;i<elements_txt.length;i++) {
      elements_txt[i].classList.add("darkmode-txt");
      elements_txt[i].classList.remove("lightmode-txt");
    }
    let elements_li = document.getElementsByClassName("menu-li");
    for(let i=0;i<elements_li.length;i++) {
      elements_li[i].classList.add("darkmode-li");
      elements_li[i].classList.remove("lightmode-li");
    }
    document.getElementById("menu").classList.remove("lightmode-menu");
    document.getElementById("menu").classList.add("darkmode-menu");
    document.documentElement.style.setProperty('--dark-mode', "1");
  }

  //header dark mode off
  static darkmodeOff() {
    let logo = document.getElementsByClassName("logo")[0];
    let header = document.getElementsByClassName("header")[0];
    logo.getElementsByTagName("img")[1].classList.add("zero-opacity");
    logo.getElementsByTagName("img")[1].classList.add("display-none");
    logo.getElementsByTagName("img")[0].classList.remove("zero-opacity");
    logo.getElementsByTagName("img")[0].classList.remove("display-none");
    header.classList.remove("header-darkmode");
    header.classList.remove("darkmode-bg");
    header.classList.add("lightmode-bg");
    let txt_elements = document.getElementsByClassName("lightmode-txt");
    for(let i=0;i<txt_elements.length;i++) {
      txt_elements[i].classList.remove("darkmode-txt");
    }
    document.getElementById("login").classList.add("login-lightmode");
    document.getElementById("login").classList.remove("login-darkmode");
    document.getElementById("hamburger-white").style.opacity = "0";
    document.getElementById("hamburger-black").style.opacity = "1";
    //mobile menu dark mode off
    let elements_txt = document.getElementsByClassName("menu-a");
    for(let i=0;i<elements_txt.length;i++) {
      elements_txt[i].classList.remove("darkmode-txt");
      elements_txt[i].classList.add("lightmode-txt");
    }
    let elements_li = document.getElementsByClassName("menu-li");
    for(let i=0;i<elements_li.length;i++) {
      elements_li[i].classList.add("lightmode-li");
      elements_li[i].classList.remove("darkmode-li");
    }
    document.getElementById("menu").classList.remove("darkmode-menu");
    document.getElementById("menu").classList.add("lightmode-menu");
    document.documentElement.style.setProperty('--dark-mode', "0");
  }

  static darkenBackdrop() {
    document.getElementById("darken").classList.toggle("display-none");
  }

  /**********Mobile View Adjustments**********/
  mobileview(x) {
    if (x.matches) { // If media query matches
        document.getElementById("hamburger").classList.remove("display-none");
        document.getElementById("toggle").classList.remove("display-none");
        document.getElementById("login").classList.add("display-none");
        document.getElementById("signup").classList.add("display-none");
        document.getElementById("login-signup").classList.add("display-none");
    } else {
        document.getElementById("hamburger").classList.add("display-none");
        document.getElementById("toggle").classList.add("display-none");
        document.getElementById("login-signup").classList.remove("display-none");
        document.getElementById("login").classList.remove("display-none");
        document.getElementById("signup").classList.remove("display-none");
    }
  }

  /**********Menu toggle**********/
  menuState:string = "inactive";
  menuToggle(event:Event) {
    event.preventDefault();
    this.menuState = (this.menuState === "inactive" ? "active" : "inactive");
  }

}
