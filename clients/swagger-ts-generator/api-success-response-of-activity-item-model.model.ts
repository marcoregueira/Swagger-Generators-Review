/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';
import { SubTypeFactory } from './sub-type-factory';


import { ActivityItemModel } from './activity-item-model.model';

export interface IApiSuccessResponseOfActivityItemModel {
    modelErrors?: object;
    message?: string;
    isValid?: boolean;
    errorCode?: string;
    notifications?: Array<string>;
    errors?: Array<string>;
    warnings?: Array<string>;
    data?: ActivityItemModel;
}


export class ApiSuccessResponseOfActivityItemModel extends BaseModel implements IApiSuccessResponseOfActivityItemModel  {

    static MODEL_ERRORS_FIELD_NAME = 'modelErrors';
    static MESSAGE_FIELD_NAME = 'message';
    static IS_VALID_FIELD_NAME = 'isValid';
    static ERROR_CODE_FIELD_NAME = 'errorCode';
    static NOTIFICATIONS_FIELD_NAME = 'notifications';
    static ERRORS_FIELD_NAME = 'errors';
    static WARNINGS_FIELD_NAME = 'warnings';
    static DATA_FIELD_NAME = 'data';

    modelErrors: object;
    message: string;
    isValid: boolean;
    errorCode: string;
    notifications: Array<string>;
    errors: Array<string>;
    warnings: Array<string>;
    data: ActivityItemModel;

    /**
     * constructor
     * @param values Can be used to set a webapi response or formValues to this newly constructed model
     * @useFormGroupValuesToModel if true use formValues
    */
    constructor(values?: any, useFormGroupValuesToModel = false) {
        super();
        this.notifications = new Array<string>(); 
        this.errors = new Array<string>(); 
        this.warnings = new Array<string>(); 
        this.data = new ActivityItemModel(); 

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
            this.modelErrors = rawValues.modelErrors;
            this.message = rawValues.message;
            this.isValid = rawValues.isValid;
            this.errorCode = rawValues.errorCode;
            this.fillModelArray<string>(this, ApiSuccessResponseOfActivityItemModel.NOTIFICATIONS_FIELD_NAME, rawValues.notifications, useFormGroupValuesToModel);
            this.fillModelArray<string>(this, ApiSuccessResponseOfActivityItemModel.ERRORS_FIELD_NAME, rawValues.errors, useFormGroupValuesToModel);
            this.fillModelArray<string>(this, ApiSuccessResponseOfActivityItemModel.WARNINGS_FIELD_NAME, rawValues.warnings, useFormGroupValuesToModel);
            this.data.setValues(rawValues.data, useFormGroupValuesToModel);
            // set values in model properties for added formControls
            super.setValuesInAddedPropertiesOfAttachedFormControls(values, useFormGroupValuesToModel);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                modelErrors: new FormControl(this.modelErrors),
                message: new FormControl(this.message),
                isValid: new FormControl(this.isValid),
                errorCode: new FormControl(this.errorCode),
                notifications: new FormArray([]),
                errors: new FormArray([]),
                warnings: new FormArray([]),
                data: this.data.$formGroup,
            });
            // generate FormArray control elements
            this.fillFormArray<string>(ApiSuccessResponseOfActivityItemModel.NOTIFICATIONS_FIELD_NAME, this.notifications);
            // generate FormArray control elements
            this.fillFormArray<string>(ApiSuccessResponseOfActivityItemModel.ERRORS_FIELD_NAME, this.errors);
            // generate FormArray control elements
            this.fillFormArray<string>(ApiSuccessResponseOfActivityItemModel.WARNINGS_FIELD_NAME, this.warnings);
        }
        return this._formGroup;
    }

    /**
     * set the FormGroup values to the model values.
    */
    setFormGroupValues() {
        this.$formGroup.controls[ApiSuccessResponseOfActivityItemModel.MODEL_ERRORS_FIELD_NAME].setValue(this.modelErrors);
        this.$formGroup.controls[ApiSuccessResponseOfActivityItemModel.MESSAGE_FIELD_NAME].setValue(this.message);
        this.$formGroup.controls[ApiSuccessResponseOfActivityItemModel.IS_VALID_FIELD_NAME].setValue(this.isValid);
        this.$formGroup.controls[ApiSuccessResponseOfActivityItemModel.ERROR_CODE_FIELD_NAME].setValue(this.errorCode);
        this.fillFormArray<string>(ApiSuccessResponseOfActivityItemModel.NOTIFICATIONS_FIELD_NAME, this.notifications);
        this.fillFormArray<string>(ApiSuccessResponseOfActivityItemModel.ERRORS_FIELD_NAME, this.errors);
        this.fillFormArray<string>(ApiSuccessResponseOfActivityItemModel.WARNINGS_FIELD_NAME, this.warnings);
        this.data.setFormGroupValues();
        // set formValues in added formControls
        super.setFormGroupValuesInAddedFormControls();
    }
}

