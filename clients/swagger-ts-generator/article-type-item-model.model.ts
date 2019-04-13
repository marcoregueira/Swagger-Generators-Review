/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';
import { SubTypeFactory } from './sub-type-factory';



export interface IArticleTypeItemModel {
    id?: number;
    code?: string;
    name?: string;
    active?: boolean;
}


export class ArticleTypeItemModel extends BaseModel implements IArticleTypeItemModel  {

    static ID_FIELD_NAME = 'id';
    static CODE_FIELD_NAME = 'code';
    static NAME_FIELD_NAME = 'name';
    static ACTIVE_FIELD_NAME = 'active';

    id: number;
    code: string;
    name: string;
    active: boolean;

    /**
     * constructor
     * @param values Can be used to set a webapi response or formValues to this newly constructed model
     * @useFormGroupValuesToModel if true use formValues
    */
    constructor(values?: any, useFormGroupValuesToModel = false) {
        super();

        if (values) {
            this.setValues(values, useFormGroupValuesToModel);
        }
    }

    /**
     * set the values.
     * @param values Can be used to set a webapi response to this newly constructed model
    */
    setValues(values: any, useFormGroupValuesToModel = false): void {
        if (values) {
            const rawValues = this.getValuesToUse(values, useFormGroupValuesToModel);
            this.id = rawValues.id;
            this.code = rawValues.code;
            this.name = rawValues.name;
            this.active = rawValues.active;
            // set values in model properties for added formControls
            super.setValuesInAddedPropertiesOfAttachedFormControls(values, useFormGroupValuesToModel);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                id: new FormControl(this.id),
                code: new FormControl(this.code),
                name: new FormControl(this.name),
                active: new FormControl(this.active),
            });
        }
        return this._formGroup;
    }

    /**
     * set the FormGroup values to the model values.
    */
    setFormGroupValues() {
        this.$formGroup.controls[ArticleTypeItemModel.ID_FIELD_NAME].setValue(this.id);
        this.$formGroup.controls[ArticleTypeItemModel.CODE_FIELD_NAME].setValue(this.code);
        this.$formGroup.controls[ArticleTypeItemModel.NAME_FIELD_NAME].setValue(this.name);
        this.$formGroup.controls[ArticleTypeItemModel.ACTIVE_FIELD_NAME].setValue(this.active);
        // set formValues in added formControls
        super.setFormGroupValuesInAddedFormControls();
    }
}

