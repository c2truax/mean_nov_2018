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
  newTask: any;
  constructor (private _httpService : HttpService ) {}

   // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit () {
    // this.getTasksFromService();
    this.tasks = [];
    this.oneTaskbyID = [];
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


 getTaskById(id){
   let observable = this._httpService.getTaskById(id);
   observable.subscribe (data => {
     console.log("Got our task by ID!", data);
     this.oneTaskbyID = data["data"];
   });
 }

 onSubmit() {
   let observable = this._httpService.addTask(this.newTask);
   observable.subscribe(data => {
     console.log("Got data from post back", data);
  // Reset this.newTask to a new, clean object.
     this.newTask = { title: "", description: "", completed: false }
  //updates the task list with the most recent
     // this.getTasksFromService();
  });
 }

 editTask(id){
   //check what to pass
   console.log("Starting to edit!");
   let observable = this._httpService.updateTask(id, this.oneTaskbyID);
   observable.subscribe(data => {
     console.log("Updated task:", data);
   });
 }

 deleteTask(id){
   let observable = this._httpService.destroyTask(id);
   observable.subscribe(data => {
     console.log("Deleted task");
     this.getTasksFromService();
   });
 }
}
