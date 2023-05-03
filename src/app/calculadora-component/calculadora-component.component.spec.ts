import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponentComponent } from './calculadora-component.component';

describe('CalculadoraComponentComponent', () => {
  let component: CalculadoraComponentComponent;
  let fixture: ComponentFixture<CalculadoraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
