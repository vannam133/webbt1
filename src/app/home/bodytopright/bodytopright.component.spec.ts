/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BodytoprightComponent } from './bodytopright.component';

describe('BodytoprightComponent', () => {
  let component: BodytoprightComponent;
  let fixture: ComponentFixture<BodytoprightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytoprightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytoprightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
