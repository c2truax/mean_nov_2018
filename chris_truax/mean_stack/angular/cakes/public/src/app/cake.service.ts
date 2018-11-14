import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CakeService {
  constructor(private _http: HttpClient) {}


  getCakes(){
    return this._http.get("/cakes");
  }

  addCake(newCake){
    return this._http.post("/cakes", newCake);
  }

  addRating(cake, rating){
    console.log(cake);
    return this._http.post(`/rating/${cake._id}`, rating);
  }

}
