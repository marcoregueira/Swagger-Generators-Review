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
import {UpdateArticleTypeParams} from '../../../../controllers/Article';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Article updateArticleType] Start',
  SUCCESS = '[Article updateArticleType] Success',
  ERROR = '[Article updateArticleType] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateArticleTypeParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ApiSuccessResponseOfArticleTypeItemModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdateArticleTypeAction = Start | Success | Error;
