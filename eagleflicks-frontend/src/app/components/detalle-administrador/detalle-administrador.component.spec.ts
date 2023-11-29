import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAdministradorComponent } from './detalle-administrador.component';

describe('DetalleAdministradorComponent', () => {
  let component: DetalleAdministradorComponent;
  let fixture: ComponentFixture<DetalleAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAdministradorComponent]
    });
    fixture = TestBed.createComponent(DetalleAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
