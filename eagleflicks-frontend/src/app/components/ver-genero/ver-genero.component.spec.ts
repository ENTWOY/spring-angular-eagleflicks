import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGeneroComponent } from './ver-genero.component';

describe('VerGeneroComponent', () => {
  let component: VerGeneroComponent;
  let fixture: ComponentFixture<VerGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerGeneroComponent]
    });
    fixture = TestBed.createComponent(VerGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
