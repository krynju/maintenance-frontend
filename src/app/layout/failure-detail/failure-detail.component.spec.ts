import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureDetailComponent } from './failure-detail.component';

describe('FailureDetailComponent', () => {
  let component: FailureDetailComponent;
  let fixture: ComponentFixture<FailureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
