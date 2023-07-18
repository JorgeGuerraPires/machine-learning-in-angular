import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model3Component } from './model3.component';

describe('Model3Component', () => {
  let component: Model3Component;
  let fixture: ComponentFixture<Model3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
