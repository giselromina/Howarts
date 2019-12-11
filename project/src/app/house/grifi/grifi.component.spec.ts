import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrifiComponent } from './grifi.component';

describe('GrifiComponent', () => {
  let component: GrifiComponent;
  let fixture: ComponentFixture<GrifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
