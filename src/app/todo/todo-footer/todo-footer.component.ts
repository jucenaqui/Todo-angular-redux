import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromFiltrosAction from 'src/app/filter/filter.actions';
import { Todo } from '../model/todo.model';
import { BorrarTodoCompletadoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  todoPendientes = 0;
  filtroSeleccionado = 'todos';
  filtros: fromFiltrosAction.filtrosValidos[] = ['todos', 'pendientes', 'completados'];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store
      .subscribe( state => {

           this.contarPendientes( state.todos );
           this.filtroSeleccionado = state.filtro;
      });
  }

  cambiarFiltro(filtro: fromFiltrosAction.filtrosValidos) {

      const action = new fromFiltrosAction.SetFiltroAction( filtro );
      this.store.dispatch( action );
  }

  contarPendientes(todos: Todo[] ) {
      this.todoPendientes = todos.filter( todo => !todo.completado ).length;
  }

  limpiarCompletados() {

    const action = new BorrarTodoCompletadoAction();
    this.store.dispatch( action );
  }

}
