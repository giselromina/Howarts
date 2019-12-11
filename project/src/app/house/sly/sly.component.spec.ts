import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlyComponent } from './sly.component';

describe('SlyComponent', () => {
  let component: SlyComponent;
  let fixture: ComponentFixture<SlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
