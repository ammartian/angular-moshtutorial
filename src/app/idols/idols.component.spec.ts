import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolsComponent } from './idols.component';

describe('IdolsComponent', () => {
  let component: IdolsComponent;
  let fixture: ComponentFixture<IdolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
