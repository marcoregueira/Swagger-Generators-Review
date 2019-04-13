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
import {GetActivityFormService} from './getActivity.service';

import {GetActivityEffects} from './states/effects';
import {GetActivityReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, GetActivityReducer),
    NgrxEffectsModule.forFeature([GetActivityEffects]),
  ],
  providers: [
    ActivityService,
    GetActivityFormService,
  ],
})
export class GetActivityModule {}
