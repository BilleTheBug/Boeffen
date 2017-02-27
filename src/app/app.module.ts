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
import {HomeComponent} from "./home/home.component";
import { MenuViewComponent } from './menu/menu-view.component';
import { CreateComponent } from './CRUDViews/create/create.component';
import { DeleteComponent } from './CRUDViews/delete/delete.component';
import { EditComponent } from './CRUDViews/edit/edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    MenuComponent,
    HomeComponent,
    MenuViewComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontawesomeModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
