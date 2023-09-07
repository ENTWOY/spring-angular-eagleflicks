import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDirectoresComponent } from './lista-directores.component';

describe('ListaDirectoresComponent', () => {
  let component: ListaDirectoresComponent;
  let fixture: ComponentFixture<ListaDirectoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDirectoresComponent]
    });
    fixture = TestBed.createComponent(ListaDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
