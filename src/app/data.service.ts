import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage'
import { CookieService } from '../../node_modules/ngx-cookie-service';

import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
  val = false
  result: any;

  constructor(private _http: Http, private _cookieService: CookieService
    , private localst: LocalStorageService, private sessionst: SessionStorageService) { }


  getUsers() {
    return this._http.get("/api/users")
      .pipe(map(result => this.result = result.json().data));
  }

  validateUser(user) {
    return this._http.post("/api/validate", user)
      .pipe(map(result => result.json()));
  }

  fetchProducts() {
    return this._http.get("/api/product")
      .pipe(map(result => result.json()));
    //return this._http.get('assets/fruits.json')
    //.pipe(map(result => result.json()));
  }

  addNewUser(newdata) {
    return this._http.post("/api/registration", newdata)
      .pipe(map(result => result.json()));
  }

  setCookies(login, user) {
    this._cookieService.set('user', user);
  }
  setLocalStorage(user) {
    this.localst.store('user', user)
  }

  setSessionStorage(user) {
    this.sessionst.store('user', user)
  }

  delCookies() {
    this._cookieService.delete('user');
  }
  delLocalStorage() {
    this.localst.clear('user')
  }

  delSessionStorage() {
    this.sessionst.clear('user')
  }
  getSessionStorage() {
    this.val = this.sessionst.retrieve('user')
    return this.val
  }

  createCart() {
    let user = this.getSessionStorage();
    let cart = new Cart([], user)
    this.sessionst.store('cart', cart);
  }

  getCart() {
    return this.sessionst.retrieve('cart');
  }

  deleteCart() {
    this.sessionst.clear('cart');
  }

  addProductInCart(product: any) {
    let cart = this.getCart();
    cart.addProduct(product);
    this.sessionst.store('cart', cart)
  }

  deleteProductInCart(product: any) {
    let cart = this.getCart();
    cart.deleteProduct(product);
    this.sessionst.store('cart', cart);
  }
}
