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
import {ReasonService} from '../../../controllers/Reason';

@Injectable()
export class ReasonsFormService {
  form: FormGroup;
  constructor(
    private reasonService: ReasonService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        reasons: new FormArrayExtended(() => (
          new FormGroup({
            id: new FormControl(undefined, []),
            code: new FormControl(undefined, []),
            name: new FormControl(undefined, []),
            active: new FormControl(undefined, []),
          }, [])), [], []),
        showDeleted: new FormControl(undefined, []),
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
    return this.reasonService.reasons(data);
  }
}
