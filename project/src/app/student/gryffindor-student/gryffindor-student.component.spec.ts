import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GryffindorStudentComponent } from './gryffindor-student.component';

describe('GryffindorStudentComponent', () => {
  let component: GryffindorStudentComponent;
  let fixture: ComponentFixture<GryffindorStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GryffindorStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GryffindorStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
