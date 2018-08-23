import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmaintenanceComponent } from './newmaintenance.component';

describe('NewmaintenanceComponent', () => {
  let component: NewmaintenanceComponent;
  let fixture: ComponentFixture<NewmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
