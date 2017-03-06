import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../menu-item";
import {_localeFactory} from "@angular/core/src/application_module";

@Component({
  selector: 'bf-create',
  templateUrl: 'create.component.html'
})
export class CreateComponent implements OnInit {

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

  createMenuSmart( menu: MenuItem)
  {
    this.menus.push(menu);
    localStorage.setItem("menus", JSON.stringify(this.menus));
  }


}
