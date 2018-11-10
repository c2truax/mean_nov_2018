import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  oneTask = {};
  show: boolean;
  one: boolean;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.getTasksFromService();
    // this.getOneTaskFromService();
  };
  getTasksFromService(){
    let tasksObservable = this._httpService.getTasks();
    tasksObservable.subscribe(data => {
      console.log("got our data!", data);
      this.tasks = data['tasks'];
    });
  };
  getOneTaskFromService(id){
    let tasksObservable = this._httpService.getTask_id(id);
    tasksObservable.subscribe(data => {
      console.log("got our data!", data);
      this.oneTask = data['task'];
    });
  };
  onShowClick(){
    this.show = true;
  };
  onClick(event:any){
    this.one = true;
    this.getOneTaskFromService(event['target']['value']);
    console.log("button clicked", event['target']['value'])
  }
}
