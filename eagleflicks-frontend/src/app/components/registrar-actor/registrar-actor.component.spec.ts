import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarActorComponent } from './registrar-actor.component';

describe('RegistrarActorComponent', () => {
  let component: RegistrarActorComponent;
  let fixture: ComponentFixture<RegistrarActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarActorComponent]
    });
    fixture = TestBed.createComponent(RegistrarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
