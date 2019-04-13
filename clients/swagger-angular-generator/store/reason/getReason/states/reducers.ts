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

export interface GetReasonState {
  data: __model.ApiSuccessResponseOfReasonItemModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialGetReasonState: GetReasonState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Reason_GetReason';
export const getGetReasonStateSelector = createFeatureSelector<GetReasonState>(selectorName);

export function GetReasonReducer(
  state: GetReasonState = initialGetReasonState,
  action: actions.GetReasonAction): GetReasonState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
