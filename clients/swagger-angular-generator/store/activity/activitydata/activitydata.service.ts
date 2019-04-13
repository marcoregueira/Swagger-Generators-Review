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
export class ActivitydataFormService {
  form: FormGroup;
  constructor(
    private activityService: ActivityService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        userId: new FormControl(undefined, []),
        userName: new FormControl(undefined, []),
        activityDataId: new FormControl(undefined, []),
        controlResponses: new FormArrayExtended(() => (
          new FormGroup({
            controlId: new FormControl(undefined, []),
            dataType: new FormControl(undefined, []),
            integerValue: new FormControl(undefined, []),
            stringValue: new FormControl(undefined, []),
            dateValue: new FormControl(undefined, []),
            boolValue: new FormControl(undefined, []),
            decimalValue: new FormControl(undefined, []),
            name: new FormControl(undefined, []),
            mandatory: new FormControl(undefined, []),
            code: new FormControl(undefined, []),
            help: new FormControl(undefined, []),
            order: new FormControl(undefined, []),
          }, [])), [], []),
        projectId: new FormControl(undefined, []),
        activityName: new FormControl(undefined, []),
        start: new FormControl(undefined, []),
        comments: new FormControl(undefined, []),
        reasonId: new FormControl(undefined, []),
        reasonName: new FormControl(undefined, []),
        clientTypeId: new FormControl(undefined, []),
        clientTypeName: new FormControl(undefined, []),
        articleTypeId: new FormControl(undefined, []),
        articleTypeName: new FormControl(undefined, []),
        controlInfo: new FormGroup({
          requestClosingDateTime: new FormControl(undefined, []),
          suggestedClosingDateTime: new FormControl(undefined, []),
          completed: new FormControl(undefined, []),
        }, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.activityService.activitydata(data);
  }
}
