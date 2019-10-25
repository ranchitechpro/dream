import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { User } from '../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform: FormGroup;
  firstName : FormControl;

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      'firstName' : new FormControl(),
      'email' : new FormControl(),
      'password' : new FormControl()
    });
  }
  
  
  
  log(x){
  console.log('xxx----------'+x.value);
  }

  register(myForm : NgForm){
   
    console.log(myForm);
    console.log(myForm.control.value);

    var obj = JSON.parse(JSON.stringify(myForm.control.value));
    
    console.log('value----'+obj);
    console.log('name---'+obj.firstName);
    console.log('email---'+obj.email);
    console.log('password---'+obj.password);
    
    user :User ;
    

    
    // if(this.myform){
    //   console.log('valid form--'+this.myform.valid);
    // }

    // console.log('firstname--------'+this.myform.get('firstName'));
    
    // console.log('password--------'+this.myform.get('password'));
  }

}
