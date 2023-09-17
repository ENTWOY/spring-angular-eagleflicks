import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarGeneroComponent } from './registrar-genero.component';

describe('RegistrarGeneroComponent', () => {
  let component: RegistrarGeneroComponent;
  let fixture: ComponentFixture<RegistrarGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarGeneroComponent]
    });
    fixture = TestBed.createComponent(RegistrarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
