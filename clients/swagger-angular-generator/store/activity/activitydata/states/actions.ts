/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ActivitydataParams} from '../../../../controllers/Activity';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Activity activitydata] Start',
  SUCCESS = '[Activity activitydata] Success',
  ERROR = '[Activity activitydata] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ActivitydataParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfActivityDataCloseModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type ActivitydataAction = Start | Success | Error;
