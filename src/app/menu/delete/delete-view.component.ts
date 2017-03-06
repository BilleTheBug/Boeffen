import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {equalParamsAndUrlSegments} from "@angular/router/src/router_state";

@Component({
  selector: 'bf-delete-view',
  templateUrl: 'delete-view.component.html',
  styleUrls: ['delete-view.component.css']
})
export class DeleteViewComponent implements OnInit {
id : string;

  @Output()
  deleteMenuDumb = new EventEmitter();

  constructor( private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
        params['id'];
      }
    )
  }
  delete(id: string)
  {
    this.route.params.subscribe(params => {
      this.deleteMenuDumb.emit( params['id']);
      }
    );

  }

}
