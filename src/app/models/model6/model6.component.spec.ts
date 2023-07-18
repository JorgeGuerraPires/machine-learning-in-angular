import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model6Component } from './model6.component';

describe('Model6Component', () => {
  let component: Model6Component;
  let fixture: ComponentFixture<Model6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
