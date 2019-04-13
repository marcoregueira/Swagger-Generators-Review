/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import * as __model from '../model';

export interface ActivityDataCloseModel {
  /** format: int64 */
  userId?: number;
  userName?: string;
  /** format: int64 */
  activityDataId?: number;
  controlResponses?: __model.ControlResponse[];
  /** format: int64 */
  projectId?: number;
  activityName?: string;
  /** format: date-time */
  start?: string;
  comments?: string;
  /** format: int64 */
  reasonId?: number;
  reasonName?: string;
  /** format: int64 */
  clientTypeId?: number;
  clientTypeName?: string;
  /** format: int64 */
  articleTypeId?: number;
  articleTypeName?: string;
  controlInfo?: __model.ControlInfoData;
}
