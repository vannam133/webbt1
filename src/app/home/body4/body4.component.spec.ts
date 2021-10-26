/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Body4Component } from './body4.component';

describe('Body4Component', () => {
  let component: Body4Component;
  let fixture: ComponentFixture<Body4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Body4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Body4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
