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

import {ReasonService} from '../../../controllers/Reason';
import {FormsSharedModule} from '../../forms-shared.module';
import {DeleteReasonFormService} from './deleteReason.service';

import {DeleteReasonEffects} from './states/effects';
import {DeleteReasonReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, DeleteReasonReducer),
    NgrxEffectsModule.forFeature([DeleteReasonEffects]),
  ],
  providers: [
    ReasonService,
    DeleteReasonFormService,
  ],
})
export class DeleteReasonModule {}
