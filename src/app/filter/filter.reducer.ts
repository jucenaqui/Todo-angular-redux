import * as fromFiltrosAction from './filter.actions';

const valorInicial: fromFiltrosAction.filtrosValidos = 'todos';

export function filtroReducer( state = valorInicial,
                               action: fromFiltrosAction.acciones ): fromFiltrosAction.filtrosValidos {

    switch ( action.type ) {

        case fromFiltrosAction.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }

}