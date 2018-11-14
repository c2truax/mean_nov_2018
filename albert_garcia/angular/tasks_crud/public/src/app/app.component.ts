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
  newTask: any;
  one: boolean;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.getTasksFromService();
    this.newTask = { title: "", description: "" };
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
  onEdit(id){
    this.getOneTaskFromService(id);
    this.one = true;
  };
  onDelete(id){
    this.getOneTaskFromService(id);
    this.deleteOneTaskFromService(id);
  }
  onSubmit(){
    let Observable = this._httpService.addTask(this.newTask);
    Observable.subscribe(data => {
      console.log("got our data!", data);
      this.newTask = { title: "", description: "" };
      this.getTasksFromService();
    });
  };
  onUpdate(id){
    let Observable = this._httpService.updateTask(id, this.oneTask);
    Observable.subscribe(data => {
      console.log("got our data!", data);
      this.getTasksFromService();
      this.one = false;
    });
  };
  deleteOneTaskFromService(id){
    let Observable = this._httpService.deleteTask(id, this.oneTask);
    Observable.subscribe(data => {
      console.log("got our data!", data);
      this.getTasksFromService();
    });
  };

}
