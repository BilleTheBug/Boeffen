import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-users',
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
  }

  ngOnInit() {
  }



}
