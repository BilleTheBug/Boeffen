import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MenuItem} from "../menu-item";

@Component({
  selector: 'bf-create-view',
  templateUrl: 'create-view.component.html',
  styleUrls: ['create-view.component.css']
})
export class CreateViewComponent implements OnInit {
  newItem : MenuItem;

  @Output()
  createMenuDumb = new EventEmitter();

  constructor() {

    this.newItem = new MenuItem();
  }

  ngOnInit() {
  }

  create(){
    this.createMenuDumb.emit(this.newItem);
  }

}
