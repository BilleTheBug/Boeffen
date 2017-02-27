import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'bf-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  iconName: string = 'user';
  newUser: User;
  users: User[];
  constructor() {
    this.newUser = new User();
    this.users = JSON.parse(localStorage.getItem("users"));
    if(this.users == null)
    {
      this.users = [];
    }
  }

  createUser()
  {
    this.users.push(this.newUser);
    localStorage.setItem("users", JSON.stringify(this.users));
    this.newUser = new User();
  }

  clearUsers()
  {
    this.users = [];
    localStorage.removeItem("users");
  }

  ngOnInit() {
  }



}
