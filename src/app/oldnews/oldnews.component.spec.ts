import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldnewsComponent } from './oldnews.component';

describe('OldnewsComponent', () => {
  let component: OldnewsComponent;
  let fixture: ComponentFixture<OldnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
