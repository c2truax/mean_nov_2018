import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){};

  getWeather(city){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=f8d5315458cbb6eea51f64d00919c590`);
  }

}

