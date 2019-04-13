/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';
import { SubTypeFactory } from './sub-type-factory';



export interface IControlResponse {
    controlId?: number;
    dataType?: string;
    integerValue?: number;
    stringValue?: string;
    dateValue?: Date;
    boolValue?: boolean;
    decimalValue?: number;
    name?: string;
    mandatory?: boolean;
    code?: string;
    help?: string;
    order?: number;
}


export class ControlResponse extends BaseModel implements IControlResponse  {

    static CONTROL_ID_FIELD_NAME = 'controlId';
    static DATA_TYPE_FIELD_NAME = 'dataType';
    static INTEGER_VALUE_FIELD_NAME = 'integerValue';
    static STRING_VALUE_FIELD_NAME = 'stringValue';
    static DATE_VALUE_FIELD_NAME = 'dateValue';
    static BOOL_VALUE_FIELD_NAME = 'boolValue';
    static DECIMAL_VALUE_FIELD_NAME = 'decimalValue';
    static NAME_FIELD_NAME = 'name';
    static MANDATORY_FIELD_NAME = 'mandatory';
    static CODE_FIELD_NAME = 'code';
    static HELP_FIELD_NAME = 'help';
    static ORDER_FIELD_NAME = 'order';

    controlId: number;
    dataType: string;
    integerValue: number;
    stringValue: string;
    dateValue: Date;
    boolValue: boolean;
    decimalValue: number;
    name: string;
    mandatory: boolean;
    code: string;
    help: string;
    order: number;

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
            this.controlId = rawValues.controlId;
            this.dataType = rawValues.dataType;
            this.integerValue = rawValues.integerValue;
            this.stringValue = rawValues.stringValue;
            this.dateValue = rawValues.dateValue;
            this.boolValue = rawValues.boolValue;
            this.decimalValue = rawValues.decimalValue;
            this.name = rawValues.name;
            this.mandatory = rawValues.mandatory;
            this.code = rawValues.code;
            this.help = rawValues.help;
            this.order = rawValues.order;
            // set values in model properties for added formControls
            super.setValuesInAddedPropertiesOfAttachedFormControls(values, useFormGroupValuesToModel);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                controlId: new FormControl(this.controlId),
                dataType: new FormControl(this.dataType),
                integerValue: new FormControl(this.integerValue),
                stringValue: new FormControl(this.stringValue),
                dateValue: new FormControl(this.dateValue),
                boolValue: new FormControl(this.boolValue),
                decimalValue: new FormControl(this.decimalValue),
                name: new FormControl(this.name),
                mandatory: new FormControl(this.mandatory),
                code: new FormControl(this.code),
                help: new FormControl(this.help),
                order: new FormControl(this.order),
            });
        }
        return this._formGroup;
    }

    /**
     * set the FormGroup values to the model values.
    */
    setFormGroupValues() {
        this.$formGroup.controls[ControlResponse.CONTROL_ID_FIELD_NAME].setValue(this.controlId);
        this.$formGroup.controls[ControlResponse.DATA_TYPE_FIELD_NAME].setValue(this.dataType);
        this.$formGroup.controls[ControlResponse.INTEGER_VALUE_FIELD_NAME].setValue(this.integerValue);
        this.$formGroup.controls[ControlResponse.STRING_VALUE_FIELD_NAME].setValue(this.stringValue);
        this.$formGroup.controls[ControlResponse.DATE_VALUE_FIELD_NAME].setValue(this.dateValue);
        this.$formGroup.controls[ControlResponse.BOOL_VALUE_FIELD_NAME].setValue(this.boolValue);
        this.$formGroup.controls[ControlResponse.DECIMAL_VALUE_FIELD_NAME].setValue(this.decimalValue);
        this.$formGroup.controls[ControlResponse.NAME_FIELD_NAME].setValue(this.name);
        this.$formGroup.controls[ControlResponse.MANDATORY_FIELD_NAME].setValue(this.mandatory);
        this.$formGroup.controls[ControlResponse.CODE_FIELD_NAME].setValue(this.code);
        this.$formGroup.controls[ControlResponse.HELP_FIELD_NAME].setValue(this.help);
        this.$formGroup.controls[ControlResponse.ORDER_FIELD_NAME].setValue(this.order);
        // set formValues in added formControls
        super.setFormGroupValuesInAddedFormControls();
    }
}
