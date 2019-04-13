/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {ArticleService} from '../../../controllers/Article';
import {FormsSharedModule} from '../../forms-shared.module';
import {UpdateArticleTypeFormService} from './updateArticleType.service';

import {UpdateArticleTypeEffects} from './states/effects';
import {UpdateArticleTypeReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UpdateArticleTypeReducer),
    NgrxEffectsModule.forFeature([UpdateArticleTypeEffects]),
  ],
  providers: [
    ArticleService,
    UpdateArticleTypeFormService,
  ],
})
export class UpdateArticleTypeModule {}
