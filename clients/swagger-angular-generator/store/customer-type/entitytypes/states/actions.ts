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
import {EntitytypesParams} from '../../../../controllers/CustomerType';
import * as __model from '../../../../model';

export enum Actions {
  START = '[CustomerType entitytypes] Start',
  SUCCESS = '[CustomerType entitytypes] Success',
  ERROR = '[CustomerType entitytypes] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: EntitytypesParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.CustomerTypeModelList) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type EntitytypesAction = Start | Success | Error;
