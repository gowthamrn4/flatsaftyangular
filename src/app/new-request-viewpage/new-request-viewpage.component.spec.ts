import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestViewpageComponent } from './new-request-viewpage.component';

describe('NewRequestViewpageComponent', () => {
  let component: NewRequestViewpageComponent;
  let fixture: ComponentFixture<NewRequestViewpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestViewpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequestViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
