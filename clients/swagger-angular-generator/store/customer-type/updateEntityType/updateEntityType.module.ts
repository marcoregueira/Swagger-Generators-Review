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
import {UpdateEntityTypeFormService} from './updateEntityType.service';

import {UpdateEntityTypeEffects} from './states/effects';
import {UpdateEntityTypeReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UpdateEntityTypeReducer),
    NgrxEffectsModule.forFeature([UpdateEntityTypeEffects]),
  ],
  providers: [
    CustomerTypeService,
    UpdateEntityTypeFormService,
  ],
})
export class UpdateEntityTypeModule {}
