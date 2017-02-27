import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../menu-item";

@Component({
  selector: 'bf-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
