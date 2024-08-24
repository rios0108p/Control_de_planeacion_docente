import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaMateriaComponent } from './tarjeta-materia.component';

describe('TarjetaMateriaComponent', () => {
  let component: TarjetaMateriaComponent;
  let fixture: ComponentFixture<TarjetaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
