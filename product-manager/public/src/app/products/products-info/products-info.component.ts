import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css']
})
export class ProductsInfoComponent implements OnInit {
  @Input() productToShow: any; // from parent (products.component)

  constructor(private _route: ActivatedRoute, private _productsService: ProductsService) { }

  ngOnInit() {
    console.log('ProductsInfoComponent.ngOnInit');
    this._route.params.subscribe((prms: Params) => {
      // just an example of how to get values from the URL parameters
      console.log('ProductsInfoComponent.ngOnInit.params[id]:', prms['id']);

      // here we would get the individual products
      // this._productsService.product(prms['id']).subscribe(data => {
      //   ...
      // })
    });
  }

}
