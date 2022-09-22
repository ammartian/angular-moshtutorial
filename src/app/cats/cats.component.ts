import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  title = "List of cats:";
  cats;

  constructor(service: CatsService) {
    this.cats = service.getCats();
  }

  ngOnInit(): void {
  }

}
