import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideIn', [
      state('out', style({
        height: 0,
        opacity: 0,
        transform: "translate(-100%)",
        visibility: "hidden"
      })),
      state('in', style({
        height: '*',
        transform: "translate(0%)",
        opacity: 1
      })),
      transition('out <=> in', animate('400ms ease-in-out'))
    ]),
    trigger('slideRight', [
      state('out', style({
        transform: "translateX(-100%)",
        width: 0,
        opacity: 0,
        visibility: "hidden",
      })),
      state('in', style({
        width: '*',
        opacity: 1,
        transform: "translateX(0%)",

      })),
      transition('out <=> in', animate('400ms ease-in-out'))
    ]),
    trigger('sliderRight', [
      state('out', style({
        marginLeft: "0%",
      })),
      state('in', style({
        marginLeft: "47.5%",
      })),
      transition('out <=> in', animate('400ms ease-in-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }
  modulesStates:string[];
  coursesStates:string[];
  sidebarState:string;
  lastSelected:Element;

  ngOnInit(): void {
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 1) {
      SidebarComponent.darkmodeOn();
    } else {
      SidebarComponent.darkmodeOff();
    }
    this.modulesStates = new Array(document.getElementsByClassName("modules").length).fill("out");
    this.coursesStates = new Array(document.getElementsByClassName("title-div").length).fill("out");
    this.sidebarState = "out";
    this.expandatstart();
  }

  static darkmodeOn() {
    const sidebar_slider = document.getElementsByClassName("sidebar-slider")[0];
    const sidebar = document.getElementsByClassName("sidebar")[0];
    let courses = document.getElementsByClassName("course");
    if(sidebar !== undefined) {
      sidebar.classList.add("sidebar-darkmode");
      for(let i=0;i<courses.length;i++) {
        courses[i].classList.add("sidebar-darkmode");
        }
    }
    if(sidebar_slider !== undefined) {
      sidebar_slider.classList.add("sidebar-slider-darkmode");
    }
  }

  static darkmodeOff() {
    const sidebar_slider = document.getElementsByClassName("sidebar-slider")[0];
    const sidebar = document.getElementsByClassName("sidebar")[0];
    let courses = document.getElementsByClassName("course");
    if(sidebar !== undefined) {
      sidebar.classList.remove("sidebar-darkmode");
      for(let i=0;i<courses.length;i++) {
      courses[i].classList.remove("sidebar-darkmode");
      }
    }
    if(sidebar_slider !== undefined) {
      sidebar_slider.classList.remove("sidebar-slider-darkmode");
    }
  }

  scrollTop() {
    document.scrollingElement.scrollTop = 0;
  }

  expandatstart() {
    this.slideInElements(0);
    //this.expandSidebar();
  }

  expandSidebar() {
    const expand_sidebar_icon = document.getElementById("expand-sidebar-img");
    if (this.sidebarState === "out")
    {
      this.sidebarState = "in";
    }
    else {
      this.sidebarState = "out";
    }
    expand_sidebar_icon.classList.toggle("rotate");
  }

  home() {

  }

  signUpClassmate() {

  }

  sendFeedback() {

  }

  slideInElements(x) {
    let titleDiv = document.getElementsByClassName('title-div')[x];
    let leftIcon = titleDiv.getElementsByClassName('left-icon')[0];
    let rightIcon = titleDiv.getElementsByClassName('right-icon')[0];
    if(this.coursesStates[x] === "out") {
      rightIcon.classList.add('display-none');
      leftIcon.classList.remove('display-none');
      this.coursesStates[x]  ="in";
    } else {
      leftIcon.classList.add('display-none');
      rightIcon.classList.remove('display-none');
      this.coursesStates[x] = "out";
    }
  }

  expandcourse(x) {
    let course = document.getElementsByClassName("course")[x];
    let plusIcon = course.getElementsByTagName("img")[0];
    let minusIcon = course.getElementsByTagName("img")[1];
    if(minusIcon.classList.contains("display-none")) {
      plusIcon.classList.add("display-none");
      minusIcon.classList.remove("display-none");
      this.modulesStates[x] = "in";
    } else {
      minusIcon.classList.add("display-none");
      plusIcon.classList.remove("display-none");
      course.classList.remove("selected");
      this.modulesStates[x] = "out";
    }
  }

  selectModule(x,y) {
    if(this.lastSelected != null) {
      this.lastSelected.classList.remove("selected");
      this.lastSelected.classList.remove("setting-selected");
    }
    let course = document.getElementsByClassName("modules")[x];
    let module = course.getElementsByTagName("li")[y];
    module.classList.add("selected");
    this.lastSelected = module;
  }

  selectmyModule(x) {
    if(this.lastSelected != null) {
      this.lastSelected.classList.remove("selected");
      this.lastSelected.classList.remove("setting-selected");
    }
    let myModulesList = document.getElementById("myModules-list");
    let myModules = myModulesList.getElementsByTagName("li");
    myModules[x].classList.add("selected");
    this.lastSelected = myModules[x];
  }

  browse(x) {
    if(this.lastSelected != null) {
      this.lastSelected.classList.remove("selected");
      this.lastSelected.classList.remove("setting-selected");
    }
    let browseList = document.getElementById("browse-list");
    let types = browseList.getElementsByTagName("li");
    types[x].classList.add("selected");
    this.lastSelected = types[x];
  }

  selectSetting(x) {
    if(this.lastSelected != null) {
      this.lastSelected.classList.remove("selected");
      this.lastSelected.classList.remove("setting-selected");
    }
    let settingsList = document.getElementById("settings-list");
    let settings = settingsList.getElementsByTagName("li");
    settings[x].classList.add("setting-selected");
    this.lastSelected = settings[x];
  }

}
