import {Component, OnInit, Input} from '@angular/core';
import {MenuItem} from "../menu-item";

@Component({
  selector: 'bf-menu-view',
  templateUrl: 'menu-view.component.html',
  styleUrls: ['menu-view.component.css']
})
export class MenuViewComponent implements OnInit {
  menus : MenuItem[];
  constructor() {
    this.menus = JSON.parse(localStorage.getItem("menus"));
    if (this.menus === null)
    {
      this.menus = [];
    }
  }

  ngOnInit() {
  }

}
