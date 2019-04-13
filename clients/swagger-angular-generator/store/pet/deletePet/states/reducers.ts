/* tslint:disable:max-line-length */
/**
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * 1.0.0
 * Swagger Petstore
 * http://swagger.io/terms/
 * apiteam@swagger.io
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0.html
 * petstore.swagger.io/v2
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface DeletePetState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDeletePetState: DeletePetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Pet_DeletePet';
export const getDeletePetStateSelector = createFeatureSelector<DeletePetState>(selectorName);

export function DeletePetReducer(
  state: DeletePetState = initialDeletePetState,
  action: actions.DeletePetAction): DeletePetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
