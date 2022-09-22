import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  title = "List of students:";
  students;

  constructor(service: StudentsService) {
    this.students = service.getStudents();
  }

  ngOnInit(): void {
  }

}
