import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getTasks(){
    return this._http.get('/tasks');
  }
  getATask(){
    return this._http.get('/tasks/5be3744b48ccf4187a99ba54')
  }
}
