import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwiceService {
  getTwiceMembers(){
    return["Jihyo", "Nayeon", "Jeongyeon", "Momo", "Sana", "Mina", "Dahyun", "Chaeyoung", "Tzuyu"];
  }

  constructor() { }
}
