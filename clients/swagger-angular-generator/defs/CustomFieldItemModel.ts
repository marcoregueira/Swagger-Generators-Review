/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

export interface CustomFieldItemModel {
  /** format: int64 */
  id?: number;
  name?: string;
  dataType?: string;
  mandatory?: boolean;
  help?: string;
  code?: string;
  /** format: int32 */
  order?: number;
}
