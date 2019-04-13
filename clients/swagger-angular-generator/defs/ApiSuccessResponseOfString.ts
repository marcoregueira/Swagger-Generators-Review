/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

export interface ApiSuccessResponseOfString {
  modelErrors?: {[key: string]: string[]};
  message?: string;
  isValid?: boolean;
  errorCode?: string;
  notifications?: string[];
  errors?: string[];
  warnings?: string[];
  data?: string;
}
