import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

// TODO: STEP 1: CREATE COMPONENT

@Component ({
  selector: 'courses',
  template: `
      <h2>Courses</h2>
      <h3>{{ title }}</h3>
      <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
      </ul>
      `
})

export class CoursesComponent {
  title = "List of courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
