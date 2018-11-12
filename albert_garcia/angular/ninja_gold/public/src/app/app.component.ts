import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  gold: number;
  activity = [];
  casino: boolean;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.newGame();
  };
  newGame(){
    this.gold = 0;
  };
  casinoCheck(){
    if(this.gold > 99){
      this.casino = true;
    }
    else{
      this.casino = false;
    };
  }
  onFarm(){
    var earned = Math.floor(Math.random() * (15 - 7 + 1) ) + 7;
    this.gold += earned;
    this.casinoCheck();
    this.activity.unshift({message: `You earned ${earned} gold from farming`, color: "green"});
  };
  onCave(){
    var earned = Math.floor(Math.random() * (10 - 5 + 1) ) + 5;
    this.gold += earned;
    this.casinoCheck();
    this.activity.unshift({message:`You earned ${earned} gold from mining`, color: "green"});
  };
  onHouse(){
    var earned = Math.floor(Math.random() * (5 - 2 + 1) ) + 2;
    this.gold += earned;
    this.casinoCheck();
    this.activity.unshift({message: `You earned ${earned} gold at the house`, color: "green"});
  };
  onCasino(){
    var neg =  Math.floor(Math.random() * (2 - 1 + 1) ) + 1;
    var earned = Math.floor(Math.random() * (100 - 0 + 1) ) + 0;
    console.log(neg);
    if(neg == 1){
      this.activity.unshift({message: `You entered a casino and lost ${earned} gold!!!`, color: "red"});
      earned *= (-1);
    }
    else{
      this.activity.unshift({message: `You earned ${earned} gold at the casino`, color: "green"});
    };
    this.gold += earned;
    this.casinoCheck();
  };

}
