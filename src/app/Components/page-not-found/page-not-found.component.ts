import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 1) {
      PageNotFoundComponent.darkmodeOn();
    } else {
      PageNotFoundComponent.darkmodeOff();
    }
  }

  static darkmodeOn() {
    if(document.getElementsByClassName("background-div")[0] != undefined)
    document.getElementsByClassName("background-div")[0].classList.add("darkmode");
  }

  static darkmodeOff() {
    if(document.getElementsByClassName("background-div")[0] != undefined)
    document.getElementsByClassName("background-div")[0].classList.remove("darkmode");
  }

}
