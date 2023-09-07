import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliculaComponent } from './detalle-pelicula.component';

describe('DetallePeliculaComponent', () => {
  let component: DetallePeliculaComponent;
  let fixture: ComponentFixture<DetallePeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePeliculaComponent]
    });
    fixture = TestBed.createComponent(DetallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
