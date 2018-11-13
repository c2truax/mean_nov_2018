import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient){
      this.getTasks();
      this.getOneTask();
      this.deleteTask();
    }

  getTasks(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('/tasks');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOneTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks/5be4bfe32f2ae25b3cc4bdee');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our task with id 5be4bfe32f2ae25b3cc4bdee!", data));

  }

  deleteTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks/5be3c0226a120c345033ebed');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Deleted our task with 5be3c0226a120c345033ebed!", data));

  }
}
