/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

export interface ControlResponse {
  /** format: int64 */
  controlId?: number;
  dataType?: string;
  /** format: int64 */
  integerValue?: number;
  stringValue?: string;
  /** format: date-time */
  dateValue?: string;
  boolValue?: boolean;
  /** format: double */
  decimalValue?: number;
  name?: string;
  mandatory?: boolean;
  code?: string;
  help?: string;
  /** format: int32 */
  order?: number;
}
