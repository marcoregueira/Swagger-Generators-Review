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

export interface ActivitiesParams {
  listModel?: __model.ActivityListModel;
}

export interface UpdateActivityParams {
  model?: __model.ActivityItemModel;
}

export interface ActivitydataParams {
  model?: __model.ActivityDataCloseModel;
}

export interface DeleteActivityParams {
  model?: __model.ActivitiyControlsRequest;
}

export interface DeleteActivityDataParams {
  model?: __model.ActivitiyControlsRequest;
}

export interface GetActivityParams {
  /** format: int64 */
  entityId: number;
}

export interface WithusersParams {
  /** format: int64 */
  entityId: number;
}

@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Activity/GetActivityList */
  activities(params: ActivitiesParams): Observable<__model.ActivityListModel> {
    const bodyParams = params.listModel;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ActivityListModel>(`/commercial_entities/activities`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Activity/UpdateActivity */
  updateActivity(params: UpdateActivityParams): Observable<__model.ApiSuccessResponseOfActivityItemModel> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfActivityItemModel>(`/commercial_entities/activity`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Activity/UpdateActivityData */
  activitydata(params: ActivitydataParams): Observable<__model.ApiSuccessResponseOfActivityDataCloseModel> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfActivityDataCloseModel>(`/commercial_entities/activitydata`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Activity/DeleteActivity */
  deleteActivity(params: DeleteActivityParams): Observable<__model.ApiSuccessResponseOfEmpty> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfEmpty>(`/commercial_entities/activity/delete`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Activity/DeleteActivityData */
  deleteActivityData(params: DeleteActivityDataParams): Observable<__model.ApiSuccessResponseOfString> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfString>(`/commercial_entities/activitydata/delete`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Activity/GetActivity */
  getActivity(params: GetActivityParams): Observable<__model.ApiSuccessResponseOfActivityItemModel> {
    const pathParams = {
      entityId: params.entityId,
    };
    return this.http.get<__model.ApiSuccessResponseOfActivityItemModel>(`/commercial_entities/activity/${pathParams.entityId}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Activity/GetActivityWithUsers */
  withusers(params: WithusersParams): Observable<__model.ApiSuccessResponseOfActivityItemModel> {
    const pathParams = {
      entityId: params.entityId,
    };
    return this.http.get<__model.ApiSuccessResponseOfActivityItemModel>(`/commercial_entities/activity/withusers/${pathParams.entityId}`);
  }
}
