/* tslint:disable:max-line-length */
/**
 * v1
 * Proyectos
 * Api de gestión de proyectos
 * None
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../../controllers/Article';

@Injectable()
export class DeleteArticleTypeFormService {
  form: FormGroup;
  constructor(
    private articleService: ArticleService,
  ) {
    this.form = new FormGroup({
      articleTypeId: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.articleService.deleteArticleType(data);
  }
}
