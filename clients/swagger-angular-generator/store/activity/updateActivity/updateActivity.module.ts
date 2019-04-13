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

import {ActivityService} from '../../../controllers/Activity';
import {FormsSharedModule} from '../../forms-shared.module';
import {UpdateActivityFormService} from './updateActivity.service';

import {UpdateActivityEffects} from './states/effects';
import {UpdateActivityReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UpdateActivityReducer),
    NgrxEffectsModule.forFeature([UpdateActivityEffects]),
  ],
  providers: [
    ActivityService,
    UpdateActivityFormService,
  ],
})
export class UpdateActivityModule {}
