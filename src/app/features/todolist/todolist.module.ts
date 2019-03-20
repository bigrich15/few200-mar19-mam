import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [TodolistComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers)
  ],
  exports: [TodolistComponent]
})
export class TodolistModule { }

