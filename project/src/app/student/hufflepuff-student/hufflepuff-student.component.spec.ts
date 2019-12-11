import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufflepuffStudentComponent } from './hufflepuff-student.component';

describe('HufflepuffStudentComponent', () => {
  let component: HufflepuffStudentComponent;
  let fixture: ComponentFixture<HufflepuffStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufflepuffStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufflepuffStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
