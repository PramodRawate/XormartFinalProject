import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // fruits = [ { name: 'Apple'}, { name: 'Banana'}, { name: 'Grapes'}, { name: 'Guava-Peru'}, { name: 'Kiwi-Green'}, { name: 'Orange'}, { name: 'Pear'}];
  fruits = [];
  filteredFruits = [];
  constructor(private _dataService: DataService,private router:Router) {
    if (this._dataService.getSessionStorage()) {
      this.getProducts();
    }
    else
      this.router.navigate(['/login']);
   }

  ngOnInit() {
    // document.getElementById("logg").style.display="none";
  }
  getProducts() {
    this._dataService.fetchProducts().subscribe(res => { 
      console.log('products: ', JSON.stringify(res));
      this.fruits = res.data;
      this.filteredFruits = res.data;
    });
  }

  filterFruits(filterBy) {
    this.filteredFruits = this.fruits.filter( fruit => {
      return (fruit.category === filterBy);
    });
  }

  logout(){
    this._dataService.delCookies()
    this._dataService.delLocalStorage()
    this._dataService.delSessionStorage()
    this._dataService.deleteCart()
  }

  addtocart(event: any){
    // this._dataService.addProductInCart()
    let id = event.target.id;
    let fruit = this.fruits.find(fruit => fruit._id == id);
    this._dataService.addProductInCart(fruit);
    // alert(fruit.name)
  }
}
