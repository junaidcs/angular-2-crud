import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
  { 
    path: 'search-users', 
    component: UsersComponent 
  },
  { 
    path: 'users/:id',      
    component: UsersComponent,
    //data: { title: 'Heroes List' } 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

