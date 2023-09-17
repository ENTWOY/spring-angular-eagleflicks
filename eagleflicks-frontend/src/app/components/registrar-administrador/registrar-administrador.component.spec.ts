import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdministradorComponent } from './registrar-administrador.component';

describe('RegistrarAdministradorComponent', () => {
  let component: RegistrarAdministradorComponent;
  let fixture: ComponentFixture<RegistrarAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAdministradorComponent]
    });
    fixture = TestBed.createComponent(RegistrarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
