import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldcomplaintComponent } from './oldcomplaint.component';

describe('OldcomplaintComponent', () => {
  let component: OldcomplaintComponent;
  let fixture: ComponentFixture<OldcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
