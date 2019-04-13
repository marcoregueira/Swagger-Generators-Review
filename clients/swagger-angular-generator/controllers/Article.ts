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

export interface ArticletypeParams {
  /** format: int64 */
  entityId: number;
}

export interface DeleteArticleTypeParams {
  /** format: int64 */
  articleTypeId: number;
}

export interface UpdateArticleTypeParams {
  model?: __model.ArticleTypeItemModel;
}

export interface ProducttypesParams {
  model?: __model.ArticleTypeModelList;
}

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Article/GetArticleType */
  articletype(params: ArticletypeParams): Observable<__model.ApiSuccessResponseOfProductTypeItemModel> {
    const pathParams = {
      entityId: params.entityId,
    };
    return this.http.get<__model.ApiSuccessResponseOfProductTypeItemModel>(`/commercial_entities/articletype/${pathParams.entityId}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Article/DeleteArticleType */
  deleteArticleType(params: DeleteArticleTypeParams): Observable<__model.ApiSuccessResponseOfEmpty> {
    const pathParams = {
      articleTypeId: params.articleTypeId,
    };
    return this.http.post<__model.ApiSuccessResponseOfEmpty>(`/commercial_entities/articleType/${pathParams.articleTypeId}`, {});
  }

  /** http://undefined/swagger/swagger-ui.html#!/Article/UpdateArticleType */
  updateArticleType(params: UpdateArticleTypeParams): Observable<__model.ApiSuccessResponseOfArticleTypeItemModel> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ApiSuccessResponseOfArticleTypeItemModel>(`/commercial_entities/articleType`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Article/GetProductTypes */
  producttypes(params: ProducttypesParams): Observable<__model.ArticleTypeModelList> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.ArticleTypeModelList>(`/commercial_entities/producttypes`, bodyParamsWithoutUndefined);
  }
}
