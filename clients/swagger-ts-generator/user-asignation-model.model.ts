/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';
import { SubTypeFactory } from './sub-type-factory';



export interface IUserAsignationModel {
    asignationId?: number;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    userId?: number;
    userName?: string;
}


export class UserAsignationModel extends BaseModel implements IUserAsignationModel  {

    static ASIGNATION_ID_FIELD_NAME = 'asignationId';
    static FIRST_NAME_FIELD_NAME = 'firstName';
    static LAST_NAME_FIELD_NAME = 'lastName';
    static FULL_NAME_FIELD_NAME = 'fullName';
    static USER_ID_FIELD_NAME = 'userId';
    static USER_NAME_FIELD_NAME = 'userName';

    asignationId: number;
    firstName: string;
    lastName: string;
    fullName: string;
    userId: number;
    userName: string;

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
            this.asignationId = rawValues.asignationId;
            this.firstName = rawValues.firstName;
            this.lastName = rawValues.lastName;
            this.fullName = rawValues.fullName;
            this.userId = rawValues.userId;
            this.userName = rawValues.userName;
            // set values in model properties for added formControls
            super.setValuesInAddedPropertiesOfAttachedFormControls(values, useFormGroupValuesToModel);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                asignationId: new FormControl(this.asignationId),
                firstName: new FormControl(this.firstName),
                lastName: new FormControl(this.lastName),
                fullName: new FormControl(this.fullName),
                userId: new FormControl(this.userId),
                userName: new FormControl(this.userName),
            });
        }
        return this._formGroup;
    }

    /**
     * set the FormGroup values to the model values.
    */
    setFormGroupValues() {
        this.$formGroup.controls[UserAsignationModel.ASIGNATION_ID_FIELD_NAME].setValue(this.asignationId);
        this.$formGroup.controls[UserAsignationModel.FIRST_NAME_FIELD_NAME].setValue(this.firstName);
        this.$formGroup.controls[UserAsignationModel.LAST_NAME_FIELD_NAME].setValue(this.lastName);
        this.$formGroup.controls[UserAsignationModel.FULL_NAME_FIELD_NAME].setValue(this.fullName);
        this.$formGroup.controls[UserAsignationModel.USER_ID_FIELD_NAME].setValue(this.userId);
        this.$formGroup.controls[UserAsignationModel.USER_NAME_FIELD_NAME].setValue(this.userName);
        // set formValues in added formControls
        super.setFormGroupValuesInAddedFormControls();
    }
}
