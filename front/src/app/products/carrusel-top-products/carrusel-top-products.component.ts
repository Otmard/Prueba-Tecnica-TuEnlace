import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product';
import { CurrencyPipe, JsonPipe, SlicePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-carrusel-top-products',
  standalone: true,
  imports: [JsonPipe, SlicePipe, CurrencyPipe],
  templateUrl: './carrusel-top-products.component.html',
  styleUrls: ['./carrusel-top-products.component.css'],
})
export class CarruselTopProductsComponent implements OnInit {
  productService = inject(ProductService);
  products!: Product[];

  ngOnInit() {
    this.productService.getTopProductos().subscribe((topProducts) => {
      const productRequests = topProducts.map(
        (element: { idArticuloSelecionado: number }) =>
          this.productService.getOneProduct(element.idArticuloSelecionado)
      );

      forkJoin(productRequests).subscribe({
        next: (responses) => {
          console.log(responses);
          this.products = responses;
        },
      });
    });
  }
}
