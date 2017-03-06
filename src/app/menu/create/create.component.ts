import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../menu-item";
import {_localeFactory} from "@angular/core/src/application_module";
import {RouterLink, Router} from "@angular/router";
import {timestamp} from "rxjs/operator/timestamp";

@Component({
  selector: 'bf-create',
  templateUrl: 'create.component.html'
})
export class CreateComponent implements OnInit {

  menus : MenuItem[];

  constructor(private router : Router) {
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
    menu.Id = this.menus.length + Date.now().toString();
    this.menus.push(menu);
    localStorage.setItem("menus", JSON.stringify(this.menus));
    this.router.navigate(['menu']);
  }


}
