import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ICategories } from '../../../../shared/models/categories.model';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  categories$: Observable<ICategories[]> | undefined;
  @Input('category') category!: any;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

}
