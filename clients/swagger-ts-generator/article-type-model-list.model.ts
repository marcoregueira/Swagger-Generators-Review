/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';
import { SubTypeFactory } from './sub-type-factory';


import { ArticleTypeItemModel } from './article-type-item-model.model';

export interface IArticleTypeModelList {
    articleTypes?: Array<ArticleTypeItemModel>;
    showDeleted?: boolean;
    filter?: string;
    formAction?: string;
    itemsPerPage?: number;
    itemsCount?: number;
    pageIndex?: number;
    pageCount?: number;
    newSort?: string;
}


export class ArticleTypeModelList extends BaseModel implements IArticleTypeModelList  {

    static ARTICLE_TYPES_FIELD_NAME = 'articleTypes';
    static SHOW_DELETED_FIELD_NAME = 'showDeleted';
    static FILTER_FIELD_NAME = 'filter';
    static FORM_ACTION_FIELD_NAME = 'formAction';
    static ITEMS_PER_PAGE_FIELD_NAME = 'itemsPerPage';
    static ITEMS_COUNT_FIELD_NAME = 'itemsCount';
    static PAGE_INDEX_FIELD_NAME = 'pageIndex';
    static PAGE_COUNT_FIELD_NAME = 'pageCount';
    static NEW_SORT_FIELD_NAME = 'newSort';

    articleTypes: Array<ArticleTypeItemModel>;
    showDeleted: boolean;
    filter: string;
    formAction: string;
    itemsPerPage: number;
    itemsCount: number;
    pageIndex: number;
    pageCount: number;
    newSort: string;

    /**
     * constructor
     * @param values Can be used to set a webapi response or formValues to this newly constructed model
     * @useFormGroupValuesToModel if true use formValues
    */
    constructor(values?: any, useFormGroupValuesToModel = false) {
        super();
        this.articleTypes = new Array<ArticleTypeItemModel>(); 

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
            this.fillModelArray<ArticleTypeItemModel>(this, ArticleTypeModelList.ARTICLE_TYPES_FIELD_NAME, rawValues.articleTypes, useFormGroupValuesToModel, ArticleTypeItemModel, SubTypeFactory.createSubTypeInstance);
            this.showDeleted = rawValues.showDeleted;
            this.filter = rawValues.filter;
            this.formAction = rawValues.formAction;
            this.itemsPerPage = rawValues.itemsPerPage;
            this.itemsCount = rawValues.itemsCount;
            this.pageIndex = rawValues.pageIndex;
            this.pageCount = rawValues.pageCount;
            this.newSort = rawValues.newSort;
            // set values in model properties for added formControls
            super.setValuesInAddedPropertiesOfAttachedFormControls(values, useFormGroupValuesToModel);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                articleTypes: new FormArray([]),
                showDeleted: new FormControl(this.showDeleted),
                filter: new FormControl(this.filter),
                formAction: new FormControl(this.formAction),
                itemsPerPage: new FormControl(this.itemsPerPage),
                itemsCount: new FormControl(this.itemsCount),
                pageIndex: new FormControl(this.pageIndex),
                pageCount: new FormControl(this.pageCount),
                newSort: new FormControl(this.newSort),
            });
            // generate FormArray control elements
            this.fillFormArray<ArticleTypeItemModel>(ArticleTypeModelList.ARTICLE_TYPES_FIELD_NAME, this.articleTypes, ArticleTypeItemModel);
        }
        return this._formGroup;
    }

    /**
     * set the FormGroup values to the model values.
    */
    setFormGroupValues() {
        this.fillFormArray<ArticleTypeItemModel>(ArticleTypeModelList.ARTICLE_TYPES_FIELD_NAME, this.articleTypes, ArticleTypeItemModel);
        this.$formGroup.controls[ArticleTypeModelList.SHOW_DELETED_FIELD_NAME].setValue(this.showDeleted);
        this.$formGroup.controls[ArticleTypeModelList.FILTER_FIELD_NAME].setValue(this.filter);
        this.$formGroup.controls[ArticleTypeModelList.FORM_ACTION_FIELD_NAME].setValue(this.formAction);
        this.$formGroup.controls[ArticleTypeModelList.ITEMS_PER_PAGE_FIELD_NAME].setValue(this.itemsPerPage);
        this.$formGroup.controls[ArticleTypeModelList.ITEMS_COUNT_FIELD_NAME].setValue(this.itemsCount);
        this.$formGroup.controls[ArticleTypeModelList.PAGE_INDEX_FIELD_NAME].setValue(this.pageIndex);
        this.$formGroup.controls[ArticleTypeModelList.PAGE_COUNT_FIELD_NAME].setValue(this.pageCount);
        this.$formGroup.controls[ArticleTypeModelList.NEW_SORT_FIELD_NAME].setValue(this.newSort);
        // set formValues in added formControls
        super.setFormGroupValuesInAddedFormControls();
    }
}
