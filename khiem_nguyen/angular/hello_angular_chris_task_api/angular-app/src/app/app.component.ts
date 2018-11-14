import { Component } from '@angular/core';
import { RestfulService } from './restful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonus Changing Title';
  constructor(private _resfulService: RestfulService){}
}
