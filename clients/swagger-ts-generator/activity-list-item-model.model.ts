/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';
import { SubTypeFactory } from './sub-type-factory';



export interface IActivityListItemModel {
    id?: number;
    code?: string;
    name?: string;
    reasonId?: number;
    reasonName?: string;
    customerTypeId?: number;
    customerTypeName?: string;
    articleTypeId?: number;
    articleTypeName?: string;
    start?: Date;
    end?: Date;
}


export class ActivityListItemModel extends BaseModel implements IActivityListItemModel  {

    static ID_FIELD_NAME = 'id';
    static CODE_FIELD_NAME = 'code';
    static NAME_FIELD_NAME = 'name';
    static REASON_ID_FIELD_NAME = 'reasonId';
    static REASON_NAME_FIELD_NAME = 'reasonName';
    static CUSTOMER_TYPE_ID_FIELD_NAME = 'customerTypeId';
    static CUSTOMER_TYPE_NAME_FIELD_NAME = 'customerTypeName';
    static ARTICLE_TYPE_ID_FIELD_NAME = 'articleTypeId';
    static ARTICLE_TYPE_NAME_FIELD_NAME = 'articleTypeName';
    static START_FIELD_NAME = 'start';
    static END_FIELD_NAME = 'end';

    id: number;
    code: string;
    name: string;
    reasonId: number;
    reasonName: string;
    customerTypeId: number;
    customerTypeName: string;
    articleTypeId: number;
    articleTypeName: string;
    start: Date;
    end: Date;

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
            this.reasonId = rawValues.reasonId;
            this.reasonName = rawValues.reasonName;
            this.customerTypeId = rawValues.customerTypeId;
            this.customerTypeName = rawValues.customerTypeName;
            this.articleTypeId = rawValues.articleTypeId;
            this.articleTypeName = rawValues.articleTypeName;
            this.start = rawValues.start;
            this.end = rawValues.end;
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
                reasonId: new FormControl(this.reasonId),
                reasonName: new FormControl(this.reasonName),
                customerTypeId: new FormControl(this.customerTypeId),
                customerTypeName: new FormControl(this.customerTypeName),
                articleTypeId: new FormControl(this.articleTypeId),
                articleTypeName: new FormControl(this.articleTypeName),
                start: new FormControl(this.start),
                end: new FormControl(this.end),
            });
        }
        return this._formGroup;
    }

    /**
     * set the FormGroup values to the model values.
    */
    setFormGroupValues() {
        this.$formGroup.controls[ActivityListItemModel.ID_FIELD_NAME].setValue(this.id);
        this.$formGroup.controls[ActivityListItemModel.CODE_FIELD_NAME].setValue(this.code);
        this.$formGroup.controls[ActivityListItemModel.NAME_FIELD_NAME].setValue(this.name);
        this.$formGroup.controls[ActivityListItemModel.REASON_ID_FIELD_NAME].setValue(this.reasonId);
        this.$formGroup.controls[ActivityListItemModel.REASON_NAME_FIELD_NAME].setValue(this.reasonName);
        this.$formGroup.controls[ActivityListItemModel.CUSTOMER_TYPE_ID_FIELD_NAME].setValue(this.customerTypeId);
        this.$formGroup.controls[ActivityListItemModel.CUSTOMER_TYPE_NAME_FIELD_NAME].setValue(this.customerTypeName);
        this.$formGroup.controls[ActivityListItemModel.ARTICLE_TYPE_ID_FIELD_NAME].setValue(this.articleTypeId);
        this.$formGroup.controls[ActivityListItemModel.ARTICLE_TYPE_NAME_FIELD_NAME].setValue(this.articleTypeName);
        this.$formGroup.controls[ActivityListItemModel.START_FIELD_NAME].setValue(this.start);
        this.$formGroup.controls[ActivityListItemModel.END_FIELD_NAME].setValue(this.end);
        // set formValues in added formControls
        super.setFormGroupValuesInAddedFormControls();
    }
}
