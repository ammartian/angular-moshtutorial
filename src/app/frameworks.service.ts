import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {
  getFrameworks(){
    return ["Angular", "Vue", "React"];
  }

  constructor() { }
}
