import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import {Routes, RouterModule} from "@angular/router";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    MenuComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
