/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface ReasonsParams {
  model?: __model.ReasonModelList;
}

export interface GetReasonParams {
  /** format: int64 */
  entityId: number;
}

export interface DeleteReasonParams {
  /** format: int64 */
  reasonId: number;
}

export interface UpdateReasonParams {
  model?: __model.ReasonItemModel;
}

@Injectable()
export class ReasonService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Reason/GetReasons */
  reasons(params: ReasonsParams): Observable<__model.ReasonModelList> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ReasonModelList>(`/commercial_entities/reasons`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Reason/GetReason */
  getReason(params: GetReasonParams): Observable<__model.ApiSuccessResponseOfReasonItemModel> {
    const pathParams = {
      entityId: params.entityId,
    };
    return this.http.get<__model.ApiSuccessResponseOfReasonItemModel>(`/commercial_entities/reason/${pathParams.entityId}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Reason/DeleteReason */
  deleteReason(params: DeleteReasonParams): Observable<__model.ApiSuccessResponseOfEmpty> {
    const pathParams = {
      reasonId: params.reasonId,
    };
    return this.http.post<__model.ApiSuccessResponseOfEmpty>(`/commercial_entities/reason/${pathParams.reasonId}`, {});
  }

  /** http://undefined/swagger/swagger-ui.html#!/Reason/UpdateReason */
  updateReason(params: UpdateReasonParams): Observable<__model.ApiSuccessResponseOfReasonItemModel> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfReasonItemModel>(`/commercial_entities/reason`, bodyParamsWithoutUndefined);
  }
}
