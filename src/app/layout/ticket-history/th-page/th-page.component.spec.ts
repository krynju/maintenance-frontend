import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThPageComponent} from './th-page.component';

describe('ThPageComponent', () => {
  let component: ThPageComponent;
  let fixture: ComponentFixture<ThPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
