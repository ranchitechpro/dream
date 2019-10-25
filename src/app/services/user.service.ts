import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User ;
  constructor() { }

  addUser(user : User){

    console.log('user added ');
  }

  updateUser(user : User){

    console.log('user updated ');
  }

  deleteUser(user : User){
    console.log('user deleted ');
  }
}
