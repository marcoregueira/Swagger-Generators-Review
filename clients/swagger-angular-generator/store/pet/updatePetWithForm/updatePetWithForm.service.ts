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

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../../../controllers/Pet';

@Injectable()
export class UpdatePetWithFormFormService {
  form: FormGroup;
  constructor(
    private petService: PetService,
  ) {
    this.form = new FormGroup({
      petId: new FormControl(undefined, [Validators.required]),
      name: new FormControl(undefined, []),
      status: new FormControl(undefined, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.petService.updatePetWithForm(data);
  }
}
