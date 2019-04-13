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
import {DeleteArticleTypeParams} from '../../../../controllers/Article';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Article deleteArticleType] Start',
  SUCCESS = '[Article deleteArticleType] Success',
  ERROR = '[Article deleteArticleType] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: DeleteArticleTypeParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfEmpty) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type DeleteArticleTypeAction = Start | Success | Error;
