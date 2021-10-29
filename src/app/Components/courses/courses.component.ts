import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [
    trigger('slideDown', [
      state('out', style({
        height: 0,
        opacity: 0,
        visibility: "hidden"
      })),
      state('in', style({
        height: '*',
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
export class CoursesComponent implements OnInit {

  constructor() { }
  materialsStates:string[];
  courseOverviewState:string;
  lastSelected:Element;

  ngOnInit(): void {
    let darkmode:number = Number(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
    if(darkmode == 1) {
      CoursesComponent.darkmodeOn();
    } else {
      CoursesComponent.darkmodeOff();
    }
    this.materialsStates = new Array(document.getElementsByClassName("materials").length).fill("out");
    this.courseOverviewState = "out";
    this.expandCourseOverview();
  }

  static darkmodeOn() {
    const course_overview_slider = document.getElementsByClassName("course-overview-slider")[0];
    const course_overview = document.getElementsByClassName("course-overview-div")[0];
    let modules = document.getElementsByClassName("module");
    if(course_overview !== undefined) {
      course_overview.classList.add("course-overview-div-darkmode");
      for(let i=0;i<modules.length;i++) {
        modules[i].classList.add("course-overview-div-darkmode");
        }
    }
    if(course_overview_slider !== undefined) {
      course_overview_slider.classList.add("course-overview-slider-darkmode");
    }
  }

  static darkmodeOff() {
    const course_overview_slider = document.getElementsByClassName("course-overview-slider")[0];
    const course_overview = document.getElementsByClassName("course-overview-div")[0];
    let modules = document.getElementsByClassName("module");
    if(course_overview !== undefined) {
      course_overview.classList.remove("course-overview-div-darkmode");
      for(let i=0;i<modules.length;i++) {
      modules[i].classList.remove("course-overview-div-darkmode");
      }
    }
    if(course_overview_slider !== undefined) {
      course_overview_slider.classList.remove("course-overview-slider-darkmode");
    }
  }

  returnToTop() {
    document.scrollingElement.scrollTop = 0;
  }

  expandModule(x) {
    let module = document.getElementsByClassName("module")[x];
    let plusIcon = module.getElementsByTagName("img")[0];
    let minusIcon = module.getElementsByTagName("img")[1];
    if(minusIcon.classList.contains("display-none")) {
      plusIcon.classList.add("display-none");
      minusIcon.classList.remove("display-none");
      this.materialsStates[x] = "in";
    } else {
      minusIcon.classList.add("display-none");
      plusIcon.classList.remove("display-none");
      module.classList.remove("selected");
      this.materialsStates[x] = "out";
    }
  }

  selectMaterial(x,y) {
    if(this.lastSelected != null) {
      this.lastSelected.classList.remove("selected");
      this.lastSelected.classList.remove("setting-selected");
    }
    let module = document.getElementsByClassName("materials")[x];
    let material = module.getElementsByTagName("li")[y];
    module.classList.add("selected");
    this.lastSelected = module;
  }

  expandCourseOverview() {
    const expand_course_overview_icon = document.getElementById("expand-course-overview-img");
    if (this.courseOverviewState === "out")
    {
      this.courseOverviewState = "in";
    }
    else {
      this.courseOverviewState = "out";
    }
    expand_course_overview_icon.classList.toggle("rotate");
  }


}
