import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  purse = {
    value: 1,
    coins: 0
  };
  transactions = []
  constructor(private _http: HttpClient){};
  sharePurse(){
    return this.purse;
  };
  shareTransactions(){
    return this.transactions;
  };
  buyCoins(transaction){
    this.purse.value += transaction;
    this.purse.coins += transaction;
    this.transactions.push(
      {
        'action': "bought",
        amount: transaction,
        value: this.purse.value
      }
    )
  };
  sellCoins(transaction){
    this.purse.value -= transaction;
    this.purse.coins -= transaction;
    this.transactions.push(
      {
        action: "sold",
        amount: transaction,
        value: this.purse.value
      }
    )
  };
  mineCoins(){
    this.purse.value += 1;
    this.purse.coins += 1;
    this.transactions.push(
      {
        action: "mined",
        amount: 1,
        value: this.purse.value
      }
    )
  };
}
