import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getHarry();
  }
  getHarry(){
    let harry = this._http.get('https://www.potterapi.com/v1/characters/5a12292a0f5ae10021650d7e?key=$2a$10$0IXpfhJpSF68AUfZiU6km.gOwmvTV9kO3I4M4rhZk/5hH/O4wbCkK');
    harry.subscribe(data => {
      console.log(`${data.name} is a ${data.house}. His patronus is a ${data.patronus}.`);
      this.getGryffindors(data);
    });
  }
  getGryffindors(data){
    let gryffindors = this._http.get(`https://www.potterapi.com/v1/characters?key=$2a$10$0IXpfhJpSF68AUfZiU6km.gOwmvTV9kO3I4M4rhZk/5hH/O4wbCkK&house=${data.house}`);
    gryffindors.subscribe(data => {
      for (var x=0; x < data.length; x++){
        let patronus: string;
        if(data[x].name != "Harry Potter"){
          if (data[x].patronus == undefined){
            patronus = "but they don't have a patronus."
          }
          else if(data[x].patronus == "stag"){
            patronus = "and they have the same patronus as Harry Potter!"
          }
          else{
            patronus = `but their patronus is a ${data[x].patronus}.`
          }
          console.log(`${data[x].name} is also a ${data[x].house}, ${patronus}`);
        }
      }
    });
  }
}
  
