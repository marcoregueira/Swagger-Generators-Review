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
import {ArticleService} from '../../../controllers/Article';

@Injectable()
export class UpdateArticleTypeFormService {
  form: FormGroup;
  constructor(
    private articleService: ArticleService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        id: new FormControl(undefined, []),
        code: new FormControl(undefined, []),
        name: new FormControl(undefined, []),
        active: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.articleService.updateArticleType(data);
  }
}
