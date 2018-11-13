import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class HttpService {
  constructor(private _http: HttpClient){
    // this.getTasks();
    // this.getTask_id();
  };
  getTasks(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  };
  getTask_id(){
    // let tempObservable = this._http.get('/tasks/:id');
    // tempObservable.subscribe(data => console.log("Got our task!", data));
    return this._http.get('/tasks/5be72855f5ffb89f0ae409a4');
  }
}


