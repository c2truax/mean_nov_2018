import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: String = '';
  gold = 0;
  game: any;
  _id: String;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.game = {gold: 0, name: ''};
    this.newGold();
  }

  onSubmit(game){
    this.game = {gold: 0, name: this.game.name}
    console.log(this.game);
    this.newGame(this.game);
    this.game = {gold: 0, name: ''}
  }

  newGold(){
    let obs = this._httpService.newGold(this.game);
    obs.subscribe(data => {
      console.log(data);
      this._id: data['data']['_id']
      this.gold = data['data']['gold'];
      this.name = data['data']['name'];
      console.log(this.game);
    });
  }

  newGame(game){
    let obs = this._httpService.newGame(this.game);
    obs.subscribe(data => {
      console.log('we are in new game', data);
      console.log('new name', data['data']['name']);
      this._id = data['data']['_id'];
      this.gold = data['data']['gold'];
      console.log(this.gold);
    });
  }

  farmGold(){
    let farm = Math.floor(Math.random()*(5-2)+2);
    this.gold += farm;
    console.log(this.gold);
  }

  caveGold(){
    let cave = Math.floor(Math.random()*(10-5)+5);
    this.gold += cave;
    console.log(this.gold);
  }

  houseGold(){
    let house = Math.floor(Math.random()*(15-7)+7);
    this.gold += house;
    console.log(this.gold);
  }

  casinoGold(){
    let casino = Math.floor(Math.random()*(100));
    let negpos = Math.random()
    if (negpos < .5){
      casino *= -1;
    }
    this.gold += casino;
    console.log(this.gold);
  }

  updateGold(){
    this.game = {gold: this.gold, name: this.name, id: this._id}
    let obs = this._httpService.updateGold(this.game)
    obs.subscribe(data =>{
      console.log(data);
    })
  }
}
