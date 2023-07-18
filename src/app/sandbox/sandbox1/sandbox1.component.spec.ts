import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandbox1Component } from './sandbox1.component';

describe('Sandbox1Component', () => {
  let component: Sandbox1Component;
  let fixture: ComponentFixture<Sandbox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sandbox1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sandbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
