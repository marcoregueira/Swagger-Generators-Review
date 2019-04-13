/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import * as __model from '../model';

export interface ActivityItemModel {
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
  users?: __model.UserAsignationModel[];
  customFields?: __model.CustomFieldItemModel[];
  /** format: date-time */
  startDate?: string;
  /** format: date-time */
  endDate?: string;
}
