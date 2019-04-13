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

export interface ActivitydataState {
  data: __model.ApiSuccessResponseOfActivityDataCloseModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialActivitydataState: ActivitydataState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Activity_Activitydata';
export const getActivitydataStateSelector = createFeatureSelector<ActivitydataState>(selectorName);

export function ActivitydataReducer(
  state: ActivitydataState = initialActivitydataState,
  action: actions.ActivitydataAction): ActivitydataState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
