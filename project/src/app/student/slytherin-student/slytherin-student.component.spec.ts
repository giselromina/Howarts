import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlytherinStudentComponent } from './slytherin-student.component';

describe('SlytherinStudentComponent', () => {
  let component: SlytherinStudentComponent;
  let fixture: ComponentFixture<SlytherinStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlytherinStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlytherinStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
