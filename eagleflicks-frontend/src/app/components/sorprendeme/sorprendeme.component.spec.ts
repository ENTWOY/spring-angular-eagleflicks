import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorprendemeComponent } from './sorprendeme.component';

describe('SorprendemeComponent', () => {
  let component: SorprendemeComponent;
  let fixture: ComponentFixture<SorprendemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorprendemeComponent]
    });
    fixture = TestBed.createComponent(SorprendemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
