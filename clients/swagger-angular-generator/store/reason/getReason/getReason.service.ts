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
import {ReasonService} from '../../../controllers/Reason';

@Injectable()
export class GetReasonFormService {
  form: FormGroup;
  constructor(
    private reasonService: ReasonService,
  ) {
    this.form = new FormGroup({
      entityId: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.reasonService.getReason(data);
  }
}
