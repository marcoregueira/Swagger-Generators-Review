/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import * as __model from '../model';

export interface ApiSuccessResponseOfCustomerTypeItemModel {
  modelErrors?: {[key: string]: string[]};
  message?: string;
  isValid?: boolean;
  errorCode?: string;
  notifications?: string[];
  errors?: string[];
  warnings?: string[];
  data?: __model.CustomerTypeItemModel;
}
