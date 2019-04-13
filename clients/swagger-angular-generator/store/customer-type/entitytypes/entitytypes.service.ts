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
import {CustomerTypeService} from '../../../controllers/CustomerType';

@Injectable()
export class EntitytypesFormService {
  form: FormGroup;
  constructor(
    private customerTypeService: CustomerTypeService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        showDeleted: new FormControl(undefined, []),
        commercialEntityTypes: new FormArrayExtended(() => (
          new FormGroup({
            id: new FormControl(undefined, []),
            name: new FormControl(undefined, []),
            code: new FormControl(undefined, []),
            active: new FormControl(undefined, []),
          }, [])), [], []),
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
    return this.customerTypeService.entitytypes(data);
  }
}
