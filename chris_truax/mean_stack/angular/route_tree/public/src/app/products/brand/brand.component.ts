import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  param_brand: string;
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['brand']);
      this.param_brand = params['brand'];
    });
  }

}
