import { Component, OnInit } from '@angular/core';
import { Menu-Item } from './menu-item';

@Component({
  selector: 'bf-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css']
})
export class CreateComponent implements OnInit {
  menu Menu-Item[]
  constructor() { }

  ngOnInit() {
  }


}
