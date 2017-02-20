import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor() {
    this.users = [
      {username: 'Bille', password: '1234'},
      {username: 'Greis', password: '1234'}
    ];
  }

  ngOnInit() {
  }



}
