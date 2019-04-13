/* tslint:disable:max-line-length */
/**
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * 1.0.0
 * Swagger Petstore
 * http://swagger.io/terms/
 * apiteam@swagger.io
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0.html
 * petstore.swagger.io/v2
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {StoreService} from '../../../controllers/Store';
import {FormsSharedModule} from '../../forms-shared.module';
import {GetOrderByIdFormService} from './getOrderById.service';

import {GetOrderByIdEffects} from './states/effects';
import {GetOrderByIdReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, GetOrderByIdReducer),
    NgrxEffectsModule.forFeature([GetOrderByIdEffects]),
  ],
  providers: [
    StoreService,
    GetOrderByIdFormService,
  ],
})
export class GetOrderByIdModule {}
