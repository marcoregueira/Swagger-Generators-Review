/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface ClienttypeState {
  data: __model.ApiSuccessResponseOfEmpty | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialClienttypeState: ClienttypeState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'CustomerType_Clienttype';
export const getClienttypeStateSelector = createFeatureSelector<ClienttypeState>(selectorName);

export function ClienttypeReducer(
  state: ClienttypeState = initialClienttypeState,
  action: actions.ClienttypeAction): ClienttypeState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}