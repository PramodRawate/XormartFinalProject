import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from  '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { Globals } from '../services/global.service';
describe('ProductsComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule,RouterTestingModule,HttpModule,Ng2Webstorage],
      providers: [CookieService,Globals]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
