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
import {EntitytypesFormService} from './entitytypes.service';

import {EntitytypesEffects} from './states/effects';
import {EntitytypesReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, EntitytypesReducer),
    NgrxEffectsModule.forFeature([EntitytypesEffects]),
  ],
  providers: [
    CustomerTypeService,
    EntitytypesFormService,
  ],
})
export class EntitytypesModule {}
