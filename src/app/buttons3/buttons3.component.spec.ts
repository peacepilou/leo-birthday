import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttons3Component } from './buttons3.component';

describe('Buttons3Component', () => {
  let component: Buttons3Component;
  let fixture: ComponentFixture<Buttons3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buttons3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buttons3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
