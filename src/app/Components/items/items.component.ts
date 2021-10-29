import { Component, OnInit } from '@angular/core';
import { DarkmodeComponent } from '../darkmode/darkmode.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 1) {
      ItemsComponent.darkmodeOn();
    } else {
      ItemsComponent.darkmodeOff();
    }
    this.setRating(1.5);
  }

  static darkmodeOn() {
    const filterbar = document.getElementsByClassName("filterbar")[0];
    const dropdownLists = document.getElementsByClassName("dropdown-list");
    const items = document.getElementsByClassName("item");
    if(filterbar !== undefined) {
      filterbar.classList.add("filterbar-darkmode");
      dropdownLists[0].classList.add("filterbar-darkmode");
      dropdownLists[1].classList.add("filterbar-darkmode");
      dropdownLists[2].classList.add("filterbar-darkmode");
      dropdownLists[3].classList.add("filterbar-darkmode");
      for(let i=0;i<items.length;i++) {
        items[i].classList.add("item-darkmode");
      }
    }
  }

  static darkmodeOff() {
    const filterbar = document.getElementsByClassName("filterbar")[0];
    const dropdownLists = document.getElementsByClassName("dropdown-list");
    const items = document.getElementsByClassName("item");
    if(filterbar !== undefined) {
      filterbar.classList.remove("filterbar-darkmode");
      dropdownLists[0].classList.remove("filterbar-darkmode");
      dropdownLists[1].classList.remove("filterbar-darkmode");
      dropdownLists[2].classList.remove("filterbar-darkmode");
      for(let i=0;i<items.length;i++) {
        items[i].classList.remove("item-darkmode");
      }
    }
  }

  showCourseInfo() {
    const info_window = document.getElementById("course-info-window");
    HeaderComponent.darkenBackdrop();
    info_window.classList.remove("display-none");
  }

  hideCourseInfo(e) {
    if(e.target === e.currentTarget) {
      const info_window = document.getElementById("course-info-window");
      HeaderComponent.darkenBackdrop();
      info_window.classList.add("display-none");
    }
  }

  showDescription(event) {
    event.target.nextElementSibling.classList.toggle("zero-height");
  }

  setRating(i:number) {
    const stars = Array.from(document.querySelectorAll(".rating__star"));
    if (stars !== []) {
    let plus_half = false;
    if (i % 1 != 0) {
      plus_half = true;
      i = i - 0.5;
    }
    let k = 5 - i - 1;
    i = i - 1;
    if (plus_half == true && (<HTMLImageElement>stars[i+1]) !== undefined) {
    (<HTMLImageElement>stars[i+1]).src = "assets/Img/star0,5.svg";
    }
    for (i; i >= 0; --i) {
      if ((<HTMLImageElement>stars[i]) !== undefined)
      (<HTMLImageElement>stars[i]).src = "assets/Img/star1.svg";
    }
    let j=0;
    for (j; j < k; j++) {
      if ((<HTMLImageElement>stars[5-j]) !== undefined)
      (<HTMLImageElement>stars[5-j]).src = "assets/Img/star0.svg";
    }
  }
  }
}
