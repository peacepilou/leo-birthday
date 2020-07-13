import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttons4Component } from './buttons4.component';

describe('Buttons4Component', () => {
  let component: Buttons4Component;
  let fixture: ComponentFixture<Buttons4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buttons4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buttons4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
