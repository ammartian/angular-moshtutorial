import { Component, OnInit } from '@angular/core';
import { IdolsService } from '../idols.service';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.scss']
})
export class IdolsComponent implements OnInit {
  title = "List of JYP idols:"
  idols;

  constructor(service: IdolsService) {
    this.idols = service.getIdols();
  }

  ngOnInit(): void {
  }

}
