import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { filtrosValidos } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todos :Todo[] = [];
  filtro: filtrosValidos
  constructor(
    private store: Store<AppState>
  ) { 
    this.store.subscribe(
      (state)=>{
        this.todos=state.todos
        this.filtro=state.filtro
      }
    )
  }

  ngOnInit() {
  }

}
