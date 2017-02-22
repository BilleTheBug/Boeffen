import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'bf-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newusername: string;
  newpassword: string;
  users: User[];
  constructor() {

    this.users = JSON.parse(localStorage.getItem("users"));
    if(this.users == null)
    {
this.users = [];
    }
  }

  CreateUser()
  {
    let user = new User();
    user.username = this.newusername;
    user.password = this.newpassword;
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
    this.newusername = null;
    this.newpassword = null;
  }

  ClearUsers()
  {
    this.users = [];
    localStorage.removeItem("users");
  }

  ngOnInit() {
  }



}
