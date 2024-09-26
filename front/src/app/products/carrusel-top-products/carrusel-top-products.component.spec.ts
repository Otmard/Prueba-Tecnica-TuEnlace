import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselTopProductsComponent } from './carrusel-top-products.component';

describe('CarruselTopProductsComponent', () => {
  let component: CarruselTopProductsComponent;
  let fixture: ComponentFixture<CarruselTopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselTopProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
