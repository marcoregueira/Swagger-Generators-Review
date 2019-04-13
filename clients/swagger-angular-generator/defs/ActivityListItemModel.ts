/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

export interface ActivityListItemModel {
  /** format: int64 */
  id?: number;
  code?: string;
  name?: string;
  /** format: int64 */
  reasonId?: number;
  reasonName?: string;
  /** format: int64 */
  customerTypeId?: number;
  customerTypeName?: string;
  /** format: int64 */
  articleTypeId?: number;
  articleTypeName?: string;
  /** format: date-time */
  start?: string;
  /** format: date-time */
  end?: string;
}
