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

import {CustomerTypeService} from '../../../controllers/CustomerType';
import {FormsSharedModule} from '../../forms-shared.module';
import {GetEntityTypeFormService} from './getEntityType.service';

import {GetEntityTypeEffects} from './states/effects';
import {GetEntityTypeReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, GetEntityTypeReducer),
    NgrxEffectsModule.forFeature([GetEntityTypeEffects]),
  ],
  providers: [
    CustomerTypeService,
    GetEntityTypeFormService,
  ],
})
export class GetEntityTypeModule {}
