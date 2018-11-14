import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: String;
  data = {};
  imgurls = {
    Seattle: "https://images.pexels.com/photos/37350/space-needle-seattle-washington-cityscape.jpg?cs=srgb&dl=architecture-buildings-city-37350.jpg&fm=jpg",
    'San Jose': "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?cs=srgb&dl=architecture-bridge-buildings-462331.jpg&fm=jpg",
    Burbank: "https://as1.ftcdn.net/jpg/00/76/18/24/500_F_76182477_uoQRTaWDWH4DrCswiiuQjjDZ45DHsl5d.jpg",
    Dallas: "https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?cs=srgb&dl=america-architecture-austin-273204.jpg&fm=jpg",
    'Washington DC.': "https://as2.ftcdn.net/jpg/00/74/55/77/500_F_74557732_LUre9UtclmxaRQ95o4qoKO8iq8vNUVlf.jpg",
    Chicago:"https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?cs=srgb&dl=architecture-blue-sky-buildings-1058759.jpg&fm=jpg"
  };
  url: String;
   
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.city = params['city'];
      console.log(params['city']);
      this.getWether();
    });
  };
  getWether(){
    let observable = this._httpService.getWeather(this.city);
    observable.subscribe(data => {
      console.log("Show our city weather", data['main']['humidity']);
      this.url = this.imgurls[`${data['name']}`];
      this.data = data;
    })
  }

}
