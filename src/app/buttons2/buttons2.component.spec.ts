import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttons2Component } from './buttons2.component';

describe('Buttons2Component', () => {
  let component: Buttons2Component;
  let fixture: ComponentFixture<Buttons2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buttons2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buttons2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
