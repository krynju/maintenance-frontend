import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FhPageComponent} from './fh-page.component';

describe('FhPageComponent', () => {
  let component: FhPageComponent;
  let fixture: ComponentFixture<FhPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FhPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
