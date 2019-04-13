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
import {UpdateReasonParams} from '../../../../controllers/Reason';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Reason updateReason] Start',
  SUCCESS = '[Reason updateReason] Success',
  ERROR = '[Reason updateReason] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateReasonParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfReasonItemModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdateReasonAction = Start | Success | Error;
