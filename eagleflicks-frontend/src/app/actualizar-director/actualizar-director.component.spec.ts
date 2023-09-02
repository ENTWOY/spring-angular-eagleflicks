import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDirectorComponent } from './actualizar-director.component';

describe('ActualizarDirectorComponent', () => {
  let component: ActualizarDirectorComponent;
  let fixture: ComponentFixture<ActualizarDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDirectorComponent]
    });
    fixture = TestBed.createComponent(ActualizarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
