import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model5Component } from './model5.component';

describe('Model5Component', () => {
  let component: Model5Component;
  let fixture: ComponentFixture<Model5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
