import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(private _httpService: HttpService){}
}


// $2a$10$1yZ3y9.5nGf5AjhqxEnc7eSgEsorbB6T.kXnnrVjC6EdYz3ZrCx26