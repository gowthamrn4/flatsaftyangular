import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplaintViewPageComponent } from './new-complaint-view-page.component';

describe('NewComplaintViewPageComponent', () => {
  let component: NewComplaintViewPageComponent;
  let fixture: ComponentFixture<NewComplaintViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComplaintViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComplaintViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
