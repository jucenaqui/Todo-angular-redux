import { Todo } from './todo/model/todo.model';
import { filtrosValidos } from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoReducer from './todo/todo.reducer';
import * as fromFiltroReducer from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: fromTodoReducer.todoReducer,
    filtro: fromFiltroReducer.filtroReducer
}