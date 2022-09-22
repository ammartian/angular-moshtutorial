import { Component, OnInit } from '@angular/core';
import { FrameworksService } from '../frameworks.service';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss']
})
export class FrameworksComponent implements OnInit {
  title = "List of frameworks:";
  frameworks;

  constructor(service: FrameworksService) {
    this.frameworks = service.getFrameworks();
  }

  ngOnInit(): void {
  }

}
