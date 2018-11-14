import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  oneTaskbyID = [];
  constructor (private _httpService : HttpService ) {}

   // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit () {
    // this.getTasksFromService();
    this.tasks = [];
    this.oneTaskbyID = [];
  };

  //grabs the data from the API
  getTasksFromService(){
    let observable = this._httpService.getTasks();
     observable.subscribe ( data => {
       console.log("Got our Tasks!", data);
       this.tasks = data["data"];
     });
  };


 getTaskById(id){
   let observable = this._httpService.getTaskById(id);
   observable.subscribe (data => {
     console.log("Got our task by ID!", data);
     this.oneTaskbyID = data["data"];
   });
 }
}
