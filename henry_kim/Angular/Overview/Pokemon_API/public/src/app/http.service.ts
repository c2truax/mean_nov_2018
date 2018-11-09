import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient){
      this.getPokemon();

    }

  getPokemon(){
      let bulbasaur = this._http.get('http://pokeapi.salestock.net/api/v2/pokemon/1');
      bulbasaur.subscribe(data => console.log("Got our Pokemon!", data));
      bulbasaur.subscribe(data => {console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}`);
      this.getAbilityCount(data.abilities[1].ability.url);
    });
  };

  getAbilityCount(url){
    let ability = this._http.get(url);
    // ability.subscribe(data => console.log("This is the ability",data));
    ability.subscribe(data => console.log(`${data.pokemon.length} pokemons have the ${data.name} ability`));
  };
}
