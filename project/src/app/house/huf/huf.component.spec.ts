import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufComponent } from './huf.component';

describe('HufComponent', () => {
  let component: HufComponent;
  let fixture: ComponentFixture<HufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
