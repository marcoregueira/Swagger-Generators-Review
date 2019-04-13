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

export interface EntitytypesParams {
  model?: __model.CustomerTypeModelList;
}

export interface UpdateEntityTypeParams {
  model?: __model.CustomerTypeItemModel;
}

export interface GetEntityTypeParams {
  /** format: int64 */
  entityId: number;
}

export interface ClienttypeParams {
  /** format: int64 */
  entityId: number;
}

@Injectable()
export class CustomerTypeService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/CustomerType/GetEntityTypeList */
  entitytypes(params: EntitytypesParams): Observable<__model.CustomerTypeModelList> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.CustomerTypeModelList>(`/commercial_entities/entitytypes`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/CustomerType/UpdateEntityType */
  updateEntityType(params: UpdateEntityTypeParams): Observable<__model.ApiSuccessResponseOfCustomerTypeItemModel> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfCustomerTypeItemModel>(`/commercial_entities/entitytype`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/CustomerType/GetEntityType */
  getEntityType(params: GetEntityTypeParams): Observable<__model.ApiSuccessResponseOfCustomerTypeItemModel> {
    const pathParams = {
      entityId: params.entityId,
    };
    return this.http.get<__model.ApiSuccessResponseOfCustomerTypeItemModel>(`/commercial_entities/entitytype/${pathParams.entityId}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/CustomerType/DeleteCustomerType */
  clienttype(params: ClienttypeParams): Observable<__model.ApiSuccessResponseOfEmpty> {
    const pathParams = {
      entityId: params.entityId,
    };
    return this.http.post<__model.ApiSuccessResponseOfEmpty>(`/commercial_entities/clienttype/${pathParams.entityId}`, {});
  }
}
