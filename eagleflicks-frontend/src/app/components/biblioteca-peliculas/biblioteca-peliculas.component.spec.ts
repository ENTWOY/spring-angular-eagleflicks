import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaPeliculasComponent } from './biblioteca-peliculas.component';

describe('BibliotecaPeliculasComponent', () => {
  let component: BibliotecaPeliculasComponent;
  let fixture: ComponentFixture<BibliotecaPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaPeliculasComponent]
    });
    fixture = TestBed.createComponent(BibliotecaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
