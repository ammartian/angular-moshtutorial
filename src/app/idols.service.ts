import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdolsService {
  getIdols(){
    return ["TWICE", "ITZY", "NMIXX", "STRAY KIDS"]
  }

  constructor() { }
}
