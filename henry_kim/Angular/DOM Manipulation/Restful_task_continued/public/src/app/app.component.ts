import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   tasks: [];
   onButtonClick(event) {
  console.log(`Click event is working, event:`, event);
}


   constructor(private _httpService: HttpService){


   }
   // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.tasks = [];
      this.getTasksFromService();
    }
    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {console.log("Got our tasks!", data)
      //data was passed in the API ({err: "", data: data})
      this.tasks = data['data'];
      // console.log(this.tasks)
    });
  }


 }
