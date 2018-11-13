import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  valid_details = true;
  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
  }



  createNewUser(data) {
    alert("First name:- " + data.fname)
    var formdata = 'firstname: -' + data.fname + '\n' + 'lastname:- ' + data.lname + '\n' + 'email:-' + data.email + '\n' + 'address' + data.address + '\n' + 'contact' + data.contact + '\n' + 'username:-' + data.username + '\n' + 'password:-' + data.password;
    alert(formdata);

    if (data.fname === '' || data.lname === '') {
      alert('Firt name and Last name missing');
      this.valid_details = false;
    }
    if (this.ValidateEmail(data.email) != true) {
      alert('Invalid Email-id');
      this.valid_details = false;
    }
    if (data.contact == null) {
      alert('Phone Number required.');
      this.valid_details = false;
    }
    if (data.password != data.cpassword) {
      alert('Password and Confirm Password do not Match');
      this.valid_details = false;
    }
    if (data.username == '') {
      alert('Username required...!!!')
      this.valid_details = false;
    }
    if (this.valid_details == true) {
      var newdata = { 'firstname': data.fname, 'lastname': data.lname, 'email': data.email, 'address': data.address, 'contact': data.contact, 'username': data.username, 'password': data.password };
      this._dataService.addNewUser(newdata).subscribe(res => {
        console.log('res', res)
      });
    }
  }

  ValidateEmail(emailvalue) {
    if (emailvalue == "")
    {
      alert('emailvalue='+emailvalue);
      return false;
      
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailvalue))
      return true;
    return false;
  }
}
