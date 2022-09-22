import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturersService {
  getLecturers(){
    return ["lecturer1", "lecturer2", "lecturer3"];
  }

  constructor() { }
}
