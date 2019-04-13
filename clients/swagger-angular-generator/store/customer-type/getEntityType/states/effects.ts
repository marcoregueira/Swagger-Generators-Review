/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {CustomerTypeService} from '../../../../controllers/CustomerType';
import * as actions from './actions';

@Injectable()
export class GetEntityTypeEffects {
  @Effect()
  GetEntityType = this.storeActions.pipe(
    ofType<actions.Start>(actions.Actions.START),
    switchMap((action: actions.Start) => this.customertypeService.getEntityType(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private customertypeService: CustomerTypeService,
  ) {}
}