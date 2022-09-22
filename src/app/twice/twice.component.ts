import { Component, OnInit } from '@angular/core';
import { TwiceService } from '../twice.service';

@Component({
  selector: 'app-twice',
  templateUrl: './twice.component.html',
  styleUrls: ['./twice.component.scss']
})
export class TwiceComponent implements OnInit {
  title = "Twice members:"
  twiceMembers;

  constructor(service: TwiceService) {
    this.twiceMembers = service.getTwiceMembers();
  }

  ngOnInit(): void {
  }

}
