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
import {FormArrayExtended} from '../../../common/formArrayExtended';
import {ActivityService} from '../../../controllers/Activity';

@Injectable()
export class UpdateActivityFormService {
  form: FormGroup;
  constructor(
    private activityService: ActivityService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        id: new FormControl(undefined, []),
        code: new FormControl(undefined, []),
        name: new FormControl(undefined, []),
        reasonId: new FormControl(undefined, []),
        reasonName: new FormControl(undefined, []),
        customerTypeId: new FormControl(undefined, []),
        customerTypeName: new FormControl(undefined, []),
        articleTypeId: new FormControl(undefined, []),
        articleTypeName: new FormControl(undefined, []),
        users: new FormArrayExtended(() => (
          new FormGroup({
            asignationId: new FormControl(undefined, []),
            firstName: new FormControl(undefined, []),
            lastName: new FormControl(undefined, []),
            fullName: new FormControl(undefined, []),
            userId: new FormControl(undefined, []),
            userName: new FormControl(undefined, []),
          }, [])), [], []),
        customFields: new FormArrayExtended(() => (
          new FormGroup({
            id: new FormControl(undefined, []),
            name: new FormControl(undefined, []),
            dataType: new FormControl(undefined, []),
            mandatory: new FormControl(undefined, []),
            help: new FormControl(undefined, []),
            code: new FormControl(undefined, []),
            order: new FormControl(undefined, []),
          }, [])), [], []),
        startDate: new FormControl(undefined, []),
        endDate: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.activityService.updateActivity(data);
  }
}
