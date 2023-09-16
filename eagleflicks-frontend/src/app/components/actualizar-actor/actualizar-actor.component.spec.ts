import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarActorComponent } from './actualizar-actor.component';

describe('ActualizarActorComponent', () => {
  let component: ActualizarActorComponent;
  let fixture: ComponentFixture<ActualizarActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarActorComponent]
    });
    fixture = TestBed.createComponent(ActualizarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
