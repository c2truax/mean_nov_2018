import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient){}

  getTasks(){
      return this._http.get('/tasks')
  }

  getTaskById(id){
    console.log("This is an id:", id);
    return this._http.get("/tasks/"+id);
  }

  addTask(newtask){
    return this._http.post('/task', newtask);
  }

//check what to pass
  updateTask(id, oneTaskbyID){
    console.log("Grabbing task with ID to update");
    return this._http.put('/update/'+id, oneTaskbyID);
  }

  destroyTask(id){
    return this._http.delete('/delete/'+id)
  }

}
