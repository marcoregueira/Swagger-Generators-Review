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
import {GetEntityTypeParams} from '../../../../controllers/CustomerType';
import * as __model from '../../../../model';

export enum Actions {
  START = '[CustomerType getEntityType] Start',
  SUCCESS = '[CustomerType getEntityType] Success',
  ERROR = '[CustomerType getEntityType] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: GetEntityTypeParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfCustomerTypeItemModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type GetEntityTypeAction = Start | Success | Error;
