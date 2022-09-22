import { Component, OnInit } from '@angular/core';
import { LecturersService } from '../lecturers.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss']
})
export class LecturersComponent implements OnInit {
  title = "List of lecturers:";
  lecturers;


  constructor(service: LecturersService) {
    this.lecturers = service.getLecturers();
  }

  ngOnInit(): void {
  }

}
