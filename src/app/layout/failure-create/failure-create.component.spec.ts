import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCreateComponent } from './failure-create.component';

describe('FailureCreateComponent', () => {
  let component: FailureCreateComponent;
  let fixture: ComponentFixture<FailureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
