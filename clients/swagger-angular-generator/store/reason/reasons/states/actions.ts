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
import {ReasonsParams} from '../../../../controllers/Reason';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Reason reasons] Start',
  SUCCESS = '[Reason reasons] Success',
  ERROR = '[Reason reasons] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ReasonsParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ReasonModelList) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type ReasonsAction = Start | Success | Error;
