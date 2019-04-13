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
import {ArticletypeParams} from '../../../../controllers/Article';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Article articletype] Start',
  SUCCESS = '[Article articletype] Success',
  ERROR = '[Article articletype] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ArticletypeParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfProductTypeItemModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type ArticletypeAction = Start | Success | Error;
