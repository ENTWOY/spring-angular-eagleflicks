import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDirectorComponent } from './detalle-director.component';

describe('DetalleDirectorComponent', () => {
  let component: DetalleDirectorComponent;
  let fixture: ComponentFixture<DetalleDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDirectorComponent]
    });
    fixture = TestBed.createComponent(DetalleDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
