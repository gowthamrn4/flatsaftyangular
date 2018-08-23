import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldrequestComponent } from './oldrequest.component';

describe('OldrequestComponent', () => {
  let component: OldrequestComponent;
  let fixture: ComponentFixture<OldrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
