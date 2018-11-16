import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newProduct = {title:"", price:0, imageURL: ""};
  }
  
  createProduct(){
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      console.log("Creating cake in database", data);
      //clean it
      this.newProduct = {title:"", price:0, imageURL: ""};

      
    });
  }
}
