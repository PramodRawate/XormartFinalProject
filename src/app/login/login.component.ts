import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";
import { Globals } from '../services/global.service';
import { CookieService } from '../../../node_modules/ngx-cookie-service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: Array<any>;
  username;
  password;
  result: any;

  constructor(private _dataService: DataService, private router: Router,private globals: Globals, private _cookieService: CookieService
    , private localst: LocalStorageService, private sessionst: SessionStorageService) {
      if (this._dataService.getSessionStorage()) {
        this.router.navigate(['/home']);
      }
     }

  ngOnInit() {
  }

  onClickSubmit(data) {
    //this.globals.isUserLoggedIn = true;
    //this.router.navigate(['home']);
    let user = { 'username': data.username, 'password': data.password };
    this._dataService.validateUser(user).subscribe(res => {
      if (res.length > 0) {
        alert("Welcome " + data.username);
        this._dataService.setCookies('login', data.username)
        this._dataService.setSessionStorage(data.username);
        this._dataService.setLocalStorage(data.username);
        this.globals.isUserLoggedIn = true;
        // this._dataService.createCart();
        this.router.navigate(['home']);
      }
      else alert("Invalid Username or Password");
      console.log('res', res)
    });
  }

  registrationpage(){
    if (this._dataService.getSessionStorage()) {
        this.router.navigate(['registration']);
    }
  }
/*
  registrationpage(){
    if (this._dataService.getSessionStorage()) {
        this.router.navigate(['registration']);
    }
  }*/
}
