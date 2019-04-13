/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import * as __model from '../model';

export interface ActivityListModel {
  activities?: __model.ActivityListItemModel[];
  /** format: int64 */
  operatorId?: number;
  /** format: int64 */
  reasonId?: number;
  /** format: int64 */
  clientTypeId?: number;
  /** format: int64 */
  articleTypeId?: number;
  /** format: date-time */
  filterDate?: string;
  onlyActive?: boolean;
  filter?: string;
  formAction?: string;
  /** format: int32 */
  itemsPerPage?: number;
  /** format: int32 */
  itemsCount?: number;
  /** format: int32 */
  pageIndex?: number;
  /** format: int32 */
  pageCount?: number;
  newSort?: string;
}
