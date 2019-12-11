import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenclawStudentComponent } from './ravenclaw-student.component';

describe('RavenclawStudentComponent', () => {
  let component: RavenclawStudentComponent;
  let fixture: ComponentFixture<RavenclawStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavenclawStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenclawStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
