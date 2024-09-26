import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  getProducts(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}?${limit}`);
  }
  guardarBusqueda(terminoBusqueda: string, idArticuloSelecionado?: number) {
    return this.http.post(environment.backendUrl + 'busqueda', {
      terminoBusqueda,
      idArticuloSelecionado,
    });
  }
  getTopProductos() {
    return this.http.get<[]>(environment.backendUrl + 'busqueda/top');
  }
  getOneProduct(id: number) {
    return this.http.get<Product>(environment.apiUrl + `/${id}`);
  }
}
