import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient){}

  getTasks(){
      return this._http.get('/tasks');
  }

  getTaskById(id){
    console.log("This is an id:", id);
    return this._http.get("/tasks/"+id);
  }

  addTask(newtask){
    return this._http.post('/task', newtask);
  }

  destroyTask(id){
    return this._http.delete('/delete/'+id);
  }

  updateTask(oneTask){
    return this._http.put('/update/' + oneTask._id, oneTask);
  }

}
