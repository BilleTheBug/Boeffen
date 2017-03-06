import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../menu-item";
import {Router} from "@angular/router";

@Component({
  selector: 'bf-delete',
  templateUrl: 'delete.component.html'
})
export class DeleteComponent implements OnInit {
menus : MenuItem[];
  constructor(private router: Router)
  {
    this.menus = JSON.parse(localStorage.getItem("menus"));
  }

  ngOnInit() {
  }
  deleteMenuSmart(id : string)
  {
    this.menus.splice(this.menus.indexOf(this.menus.find(x => x.Id == id)), 1);
    localStorage.setItem("menus",JSON.stringify(this.menus));
    this.router.navigate(['menu']);
  }

}
