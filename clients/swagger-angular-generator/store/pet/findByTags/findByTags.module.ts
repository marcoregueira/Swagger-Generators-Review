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

import {PetService} from '../../../controllers/Pet';
import {FormsSharedModule} from '../../forms-shared.module';
import {FindByTagsFormService} from './findByTags.service';

import {FindByTagsEffects} from './states/effects';
import {FindByTagsReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, FindByTagsReducer),
    NgrxEffectsModule.forFeature([FindByTagsEffects]),
  ],
  providers: [
    PetService,
    FindByTagsFormService,
  ],
})
export class FindByTagsModule {}
