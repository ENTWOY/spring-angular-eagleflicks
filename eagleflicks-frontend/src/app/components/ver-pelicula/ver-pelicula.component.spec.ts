import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPeliculaComponent } from './ver-pelicula.component';

describe('VerPeliculaComponent', () => {
  let component: VerPeliculaComponent;
  let fixture: ComponentFixture<VerPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPeliculaComponent]
    });
    fixture = TestBed.createComponent(VerPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
