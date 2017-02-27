import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../menu-item";

@Component({
  selector: 'bf-create',
  templateUrl: 'create.component.html'
})
export class CreateComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
  createMenuSmart( menu: MenuItem)
  {
    console.log('menu:', menu);
  }


}
