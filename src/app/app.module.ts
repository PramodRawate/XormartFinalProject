import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
//import { AppRouting } from './app.router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-router.module';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { Globals } from './services/global.service';
import { RegistrationComponent } from './registration/registration.component';
import {CartComponent} from './cart/cart.component';
import { CookieService } from 'ngx-cookie-service';
import {Ng2Webstorage} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    SearchComponent,
    NavmenuComponent,
    SidebarComponent,
    RegistrationComponent,
    CartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,             // <-Add HttpModule
    FormsModule,
    Ng2Webstorage
  ],
  providers: [DataService, Globals,CookieService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
