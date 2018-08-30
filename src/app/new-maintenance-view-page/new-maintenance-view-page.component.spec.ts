import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMaintenanceViewPageComponent } from './new-maintenance-view-page.component';

describe('NewMaintenanceViewPageComponent', () => {
  let component: NewMaintenanceViewPageComponent;
  let fixture: ComponentFixture<NewMaintenanceViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMaintenanceViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMaintenanceViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
