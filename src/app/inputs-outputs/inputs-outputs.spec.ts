import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsOutputs } from './inputs-outputs';

describe('InputsOutputs', () => {
  let component: InputsOutputs;
  let fixture: ComponentFixture<InputsOutputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsOutputs],
    }).compileComponents();

    fixture = TestBed.createComponent(InputsOutputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
