import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sell: number;
  purse = {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getNumbers();
  };
  getNumbers(){
    this.purse = this._httpService.sharePurse();
 };
 sellCoins(){
   console.log(this.purse['coins'])
   if(this.purse['coins'] >= 1){
    this._httpService.sellCoins(this.sell);
   };
  }
}
