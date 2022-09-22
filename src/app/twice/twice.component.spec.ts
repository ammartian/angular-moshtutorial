import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiceComponent } from './twice.component';

describe('TwiceComponent', () => {
  let component: TwiceComponent;
  let fixture: ComponentFixture<TwiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
