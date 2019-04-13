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
export class ActivitiesFormService {
  form: FormGroup;
  constructor(
    private activityService: ActivityService,
  ) {
    this.form = new FormGroup({
      listModel: new FormGroup({
        activities: new FormArrayExtended(() => (
          new FormGroup({
            id: new FormControl(undefined, []),
            code: new FormControl(undefined, []),
            name: new FormControl(undefined, []),
            reasonId: new FormControl(undefined, []),
            reasonName: new FormControl(undefined, []),
            customerTypeId: new FormControl(undefined, []),
            customerTypeName: new FormControl(undefined, []),
            articleTypeId: new FormControl(undefined, []),
            articleTypeName: new FormControl(undefined, []),
            start: new FormControl(undefined, []),
            end: new FormControl(undefined, []),
          }, [])), [], []),
        operatorId: new FormControl(undefined, []),
        reasonId: new FormControl(undefined, []),
        clientTypeId: new FormControl(undefined, []),
        articleTypeId: new FormControl(undefined, []),
        filterDate: new FormControl(undefined, []),
        onlyActive: new FormControl(undefined, []),
        filter: new FormControl(undefined, []),
        formAction: new FormControl(undefined, []),
        itemsPerPage: new FormControl(undefined, []),
        itemsCount: new FormControl(undefined, []),
        pageIndex: new FormControl(undefined, []),
        pageCount: new FormControl(undefined, []),
        newSort: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.activityService.activities(data);
  }
}
