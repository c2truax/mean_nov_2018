import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

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
