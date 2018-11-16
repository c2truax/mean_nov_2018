import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService();
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
  deleteProduct(id){
    let observable = this._httpService.delete(id);
    observable.subscribe(data => { console.log("Deleted the product!")});
    this.getProductsFromService();
  }
}
