import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from './product/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  products() {
    return this._http.get('/api/products');
  }

  createProducts(product: Product) {
    return this._http.post('/api/products', product);
  }
}
