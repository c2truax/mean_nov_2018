import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  purse = {};
  buy: number;
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
 buyCoins(){
   console.log(this.buy)
    this._httpService.buyCoins(this.buy);
 }
}
