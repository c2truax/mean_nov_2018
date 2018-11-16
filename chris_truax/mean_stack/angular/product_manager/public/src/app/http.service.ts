import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts(){
    return this._http.get('/api/products');
  }
  getAProduct(data){
    return this._http.get(`/api/products/${data.id}`)
  }
  delete(data){
    return this._http.delete(`/api/products/${data.id}`)
  }
  addProduct(newProduct){
    return this._http.post("/api/products", newProduct);
  }
}
