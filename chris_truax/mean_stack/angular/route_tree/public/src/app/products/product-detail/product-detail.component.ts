import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
   param_id: string;
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.param_id = params['id'];
    });
  }

}
