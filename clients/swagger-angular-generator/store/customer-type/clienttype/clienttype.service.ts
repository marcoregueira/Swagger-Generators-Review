/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../../controllers/CustomerType';

@Injectable()
export class ClienttypeFormService {
  form: FormGroup;
  constructor(
    private customerTypeService: CustomerTypeService,
  ) {
    this.form = new FormGroup({
      entityId: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.customerTypeService.clienttype(data);
  }
}
