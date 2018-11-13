import { Component, OnInit } from '@angular/core';
import { NinjaGoldService } from './ninja-gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja';
  gold: number;
  info: Object[];
  constructor(private _ninjaGoldService: NinjaGoldService) {}

  ngOnInit(){
    this.info = [];
    this.gold = 0;
  }

  clickHanlder(location: string){
    switch(location) {
      case 'farm':
      var gold_earned = Math.floor((Math.random() * 4 ) + 2);
      this.gold += gold_earned;
      var object = {
        total_gold: this.gold,
        message: `You earned ${gold_earned} gold at the farm`,
        color: "green"
      };
      this.info.splice(0,0,object);
      console.log(this.info);
      break;

      case 'cave':
      var gold_earned = Math.floor((Math.random() * 4 ) + 5);
      this.gold += gold_earned;
      var object = {
        total_gold: this.gold,
        message: `You earned ${gold_earned} gold at the cave`,
        color: "green"
      };
      this.info.splice(0,0,object);
      console.log(this.info);
      break;

      case 'house':
      var gold_earned = Math.floor((Math.random() * 8 ) + 7);
      this.gold += gold_earned;
      var object = {
        total_gold: this.gold,
        message: `You earned ${gold_earned} gold at the house`,
        color: "green"
      };
      this.info.splice(0,0,object);
      console.log(this.info);
      break;

      case 'casino':
      const random = Math.floor(Math.random() * 2);
      console.log(random);
      if (random == 0) {
        var gold_lost = Math.floor((Math.random()* 100)- 100);
        console.log(gold_lost);
        this.gold += gold_lost;
        gold_lost = gold_lost * -1;
        var object = {
          total_gold: this.gold,
          message: `You lost ${gold_lost} gold at the casino! Better luck next time`,
          color: "red"
        }
        this.info.splice(0,0,object);
        console.log(this.info);
        break;
      }
      var blood_money = Math.floor((Math.random()*100) + 10);
      this.gold += blood_money;
      var object = {
        total_gold: this.gold,
        message: `You earned ${blood_money} gold at the casino`,
        color: "green"
      };
      this.info.splice(0,0, object);
      console.log(this.info);
      break;

      default:
        console.log("Exited switch case");
      }

  }
}
