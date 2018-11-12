import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";

// Import the DataService
import { DataService } from './data.service';
import { Globals } from './services/global.service';
import { CookieService } from 'node_modules/ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr=[1,2,3,4,5];
  val=false;
  // Define a users property to hold our user data
  users: Array<any>;

  check(){
    this.val = this._dataService.getSessionStorage()
    return this.val;
  }
   // Create an instance of the DataService through dependency injection
   constructor(private _dataService: DataService, private router:Router,
    private globals: Globals) {
  //  this.router.navigate(['login']);
  }
}
