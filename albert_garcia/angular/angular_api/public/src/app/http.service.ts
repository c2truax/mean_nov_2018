import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
  };
  getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('https://www.potterapi.com/v1/characters?key=$2a$10$1yZ3y9.5nGf5AjhqxEnc7eSgEsorbB6T.kXnnrVjC6EdYz3ZrCx26&name=Harry Potter');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log(`Got Harry's house: ${data[0]['house']}`);
      let house = data[0]['house'];
      this.getHouse(house);
    }
    );
  };
  getHouse(house){
    let houseObservable = this._http.get(`https://www.potterapi.com/v1/characters?key=$2a$10$1yZ3y9.5nGf5AjhqxEnc7eSgEsorbB6T.kXnnrVjC6EdYz3ZrCx26&house=${house}`);
    houseObservable.subscribe(data => {
      console.log("All the members of the "+house+" house", data);
      for(var i in data){
        console.log(data[i]["name"]);
      };
    });
  };
}
