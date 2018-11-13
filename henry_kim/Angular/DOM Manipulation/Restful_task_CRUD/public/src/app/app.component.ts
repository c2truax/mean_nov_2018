import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  oneTask: Object;
  newTask: any;
  constructor (private _httpService : HttpService ) {}

   // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit () {
    // this.getTasksFromService();
    this.tasks = [];
    this.newTask = { title: "", description: "", completed: false}
  };

  //grabs the data from the API
  getTasksFromService(){
    let observable = this._httpService.getTasks();
     observable.subscribe ( data => {
       console.log("Got our Tasks!", data);
       this.tasks = data["data"];
     });
  };


 getTask(id){
   let observable = this._httpService.getTaskById(id);
   observable.subscribe (data => {
     console.log("Got our task by ID!", data);
     this.oneTask = data["data"];
   });
 }

 createTask() {
   let observable = this._httpService.addTask(this.newTask);
   observable.subscribe(data => {
     console.log("Got data from post back", data);
  // Reset this.newTask to a new, clean object.
     this.newTask = { title: "", description: "", completed: false }
  //updates the task list with the most recent
     this.getTasksFromService();
  });
 }

 deleteTask(id){
   let observable = this._httpService.destroyTask(id);
   observable.subscribe(data => {
     console.log("Deleted task");
     this.getTasksFromService();
   });
 }

 editTask(id){
   let observable = this._httpService.updateTask(this.oneTask);
   observable.subscribe(data => {
     console.log("updated task:", data);
     //removes all edit by setting it null
     this.oneTask = null;
     //grabs the task list after completion
     this.getTasksFromService();
   });
 }
}
