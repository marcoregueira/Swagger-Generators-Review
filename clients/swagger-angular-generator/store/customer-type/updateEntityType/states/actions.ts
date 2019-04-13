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
import {UpdateEntityTypeParams} from '../../../../controllers/CustomerType';
import * as __model from '../../../../model';

export enum Actions {
  START = '[CustomerType updateEntityType] Start',
  SUCCESS = '[CustomerType updateEntityType] Success',
  ERROR = '[CustomerType updateEntityType] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateEntityTypeParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfCustomerTypeItemModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdateEntityTypeAction = Start | Success | Error;
