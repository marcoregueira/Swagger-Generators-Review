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
import {DeleteActivityDataParams} from '../../../../controllers/Activity';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Activity deleteActivityData] Start',
  SUCCESS = '[Activity deleteActivityData] Success',
  ERROR = '[Activity deleteActivityData] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: DeleteActivityDataParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfString) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type DeleteActivityDataAction = Start | Success | Error;
