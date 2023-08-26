import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpleadoComponent } from './registrar-empleado.component';

describe('RegistrarEmpleadoComponent', () => {
  let component: RegistrarEmpleadoComponent;
  let fixture: ComponentFixture<RegistrarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEmpleadoComponent]
    });
    fixture = TestBed.createComponent(RegistrarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
