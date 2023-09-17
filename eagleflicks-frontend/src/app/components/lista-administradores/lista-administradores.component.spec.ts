import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdministradoresComponent } from './lista-administradores.component';

describe('ListaAdministradoresComponent', () => {
  let component: ListaAdministradoresComponent;
  let fixture: ComponentFixture<ListaAdministradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAdministradoresComponent]
    });
    fixture = TestBed.createComponent(ListaAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
