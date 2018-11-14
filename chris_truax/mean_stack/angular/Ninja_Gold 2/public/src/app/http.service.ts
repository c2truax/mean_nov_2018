import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  newGold(game){
    console.log('newGold', game);
    return this._http.post('/', game);
  }

  newGame(game){
    console.log('http', game);
    return this._http.post('/', game);
  }

  updateGold(game){
    return this._http.post('/update', game);
  }
}
