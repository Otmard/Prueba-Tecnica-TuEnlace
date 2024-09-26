import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/product';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarruselTopProductsComponent } from './carrusel-top-products/carrusel-top-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, FormsModule, CarruselTopProductsComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products!: Product[];
  limit = 10;

  searchTerm: string = '';
  filteredProducts: Product[] = [];
  displayedProducts!: Product[];

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productService.getProducts(this.limit).subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;

      this.recargarProductos();
    });
  }

  buscarPorTitulo() {
    if (this.searchTerm) {
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      console.log(this.filteredProducts.length);
      this.filteredProducts.forEach((element) => {
        this.productService
          .guardarBusqueda(this.searchTerm, element.id)
          .subscribe((res) => {
            console.log(res);
          });
      });
    } else {
      this.filteredProducts = this.products;
    }

    this.recargarProductos();
  }

  recargarProductos() {
    const startIndex = 0;
    const endIndex = startIndex + this.limit;
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }
}
