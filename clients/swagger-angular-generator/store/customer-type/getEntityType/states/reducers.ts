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

export interface GetEntityTypeState {
  data: __model.ApiSuccessResponseOfCustomerTypeItemModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialGetEntityTypeState: GetEntityTypeState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'CustomerType_GetEntityType';
export const getGetEntityTypeStateSelector = createFeatureSelector<GetEntityTypeState>(selectorName);

export function GetEntityTypeReducer(
  state: GetEntityTypeState = initialGetEntityTypeState,
  action: actions.GetEntityTypeAction): GetEntityTypeState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
