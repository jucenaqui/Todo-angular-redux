import { Action } from '@ngrx/store';

export const SET_FILTRO = '[FILTER] set filtro';
export type filtrosValidos = 'todos' | 'pendientes' | 'completados';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;

    constructor( public filtro: filtrosValidos ) {}
}

export type acciones = SetFiltroAction;
