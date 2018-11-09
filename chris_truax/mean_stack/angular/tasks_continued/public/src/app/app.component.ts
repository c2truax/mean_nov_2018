import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  all_tasks_title = 'All the tasks:';
  task_title = 'The second task:';
  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    this.getTasksFromService();
    this.getATaskFromService();
  }
  tasks = [];
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { console.log("Got our tasks!", data)
    this.tasks = data['tasks'];
    });
    
  }
  task = {};
  getATaskFromService(){
    let observable = this._httpService.getATask();
    observable.subscribe(data => { console.log("Got one tasks!", data)
    this.task = data['task'];
    });
  }
}
