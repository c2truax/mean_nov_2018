import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  param_cat: string;
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['cat']);
      this.param_cat = params['cat'];
    });
  }

}
