import { Todo } from './model/todo.model';
import * as FromTodoAction from './todo.actions';

const todo1 = new Todo('vencer a Thanos');
const todo2 = new Todo('salvar el mundo');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial,
                            action: FromTodoAction.acciones ): Todo[] {

    switch ( action.type ) {

        case FromTodoAction.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo ];
        case FromTodoAction.TOGGLE_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        case FromTodoAction.EDITAR_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        case FromTodoAction.BORRAR_TODO:
            return state.filter( to => to.id !== action.id );

        case FromTodoAction.TOGGLE_ALL:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.estado
                };
            });
        case FromTodoAction.BORRAR_TODO_COMPLETADO:
            return state.filter( todoCompletado => !todoCompletado.completado);
        default:
            return state;
    }

}