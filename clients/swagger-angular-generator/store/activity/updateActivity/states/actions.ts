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
import {UpdateActivityParams} from '../../../../controllers/Activity';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Activity updateActivity] Start',
  SUCCESS = '[Activity updateActivity] Success',
  ERROR = '[Activity updateActivity] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateActivityParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfActivityItemModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdateActivityAction = Start | Success | Error;
