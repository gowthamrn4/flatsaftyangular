import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldmaintenanceComponent } from './oldmaintenance.component';

describe('OldmaintenanceComponent', () => {
  let component: OldmaintenanceComponent;
  let fixture: ComponentFixture<OldmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
