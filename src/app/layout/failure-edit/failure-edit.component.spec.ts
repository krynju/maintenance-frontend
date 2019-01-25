import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureEditComponent } from './failure-edit.component';

describe('FailureEditComponent', () => {
  let component: FailureEditComponent;
  let fixture: ComponentFixture<FailureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
