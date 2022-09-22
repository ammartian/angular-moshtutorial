import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getStudents(){
    return ["student1", "student2", "student3"];
  }

  constructor() { }
}
