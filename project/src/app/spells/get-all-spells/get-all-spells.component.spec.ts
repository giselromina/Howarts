import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSpellsComponent } from './get-all-spells.component';

describe('GetAllSpellsComponent', () => {
  let component: GetAllSpellsComponent;
  let fixture: ComponentFixture<GetAllSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
