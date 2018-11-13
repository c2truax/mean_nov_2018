import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  all_tasks_title = 'Get all tasks:';
  public show:boolean = false;
  public hide:boolean = false;
  constructor(private _httpService: HttpService){

  }
  ngOnInit(){

    
  }
  buttonClick(){
    this.hide = !this.hide;
    this.getTasksFromService();
  }
  showClick(data){
    this.show = !this.show;
    this.getATaskFromService(data);
  }
  tasks = [];
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { console.log("Got our tasks!", data)
    this.tasks = data['tasks'];
    });
    
  }
  task = {};
  getATaskFromService(data){
    let observable = this._httpService.getATask(data);
    observable.subscribe(data => { console.log("Got one tasks!", data)
    this.task = data['task'];
    });
  }
}
