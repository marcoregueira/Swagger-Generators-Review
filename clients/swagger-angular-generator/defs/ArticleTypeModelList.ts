/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import * as __model from '../model';

export interface ArticleTypeModelList {
  articleTypes?: __model.ArticleTypeItemModel[];
  showDeleted?: boolean;
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
