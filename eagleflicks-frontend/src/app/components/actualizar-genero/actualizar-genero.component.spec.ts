import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGeneroComponent } from './actualizar-genero.component';

describe('ActualizarGeneroComponent', () => {
  let component: ActualizarGeneroComponent;
  let fixture: ComponentFixture<ActualizarGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarGeneroComponent]
    });
    fixture = TestBed.createComponent(ActualizarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
