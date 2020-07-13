import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttons5Component } from './buttons5.component';

describe('Buttons5Component', () => {
  let component: Buttons5Component;
  let fixture: ComponentFixture<Buttons5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buttons5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buttons5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
