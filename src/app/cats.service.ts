import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  getCats(){
    return ["Ren", "Eggsy", "Sugar", "Finn", "Other <3"];
  }

  constructor() { }
}
