import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Product Manager';
  all_products_title = 'Get All Products';
  public show:boolean = false;
  public hide:boolean = false;
  constructor(private _httpService: HttpService){

  }
  ngOnInit(){

    
  }
  buttonClick(){
    this.hide = !this.hide;
    this.getProductsFromService();
  }
  showClick(data){
    this.show = !this.show;
    this.getAProductFromService(data);
  }
  products = [];
  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => { console.log("Got our products!", data)
    for (var p=0; p< data['products'].length; p++){
      data['products'][p]['price'] = parseFloat(data['products'][p]['price']).toFixed(2);
    }
    this.products = data['products'];
    });
    
  }
  product = {};
  getAProductFromService(data){
    let observable = this._httpService.getAProduct(data);
    observable.subscribe(data => { console.log("Got one products!", data)
    data['product']['price'] = parseFloat(data['product']['price']).toFixed(2);
    this.product = data['product'];
    });
  }
}
