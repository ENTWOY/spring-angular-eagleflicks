import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAdministradorComponent } from './actualizar-administrador.component';

describe('ActualizarAdministradorComponent', () => {
  let component: ActualizarAdministradorComponent;
  let fixture: ComponentFixture<ActualizarAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAdministradorComponent]
    });
    fixture = TestBed.createComponent(ActualizarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
