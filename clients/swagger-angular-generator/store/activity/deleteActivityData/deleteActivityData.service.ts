/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivityService} from '../../../controllers/Activity';

@Injectable()
export class DeleteActivityDataFormService {
  form: FormGroup;
  constructor(
    private activityService: ActivityService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        activityTypeId: new FormControl(undefined, []),
        activityDataId: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.activityService.deleteActivityData(data);
  }
}
