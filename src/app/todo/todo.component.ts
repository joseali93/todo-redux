import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAlltodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado:boolean=false;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }
  toggleAll(){
    this.completado = !this.completado;
    const accion = new ToggleAlltodoAction(this.completado)
    this.store.dispatch(accion);
  }

}
