import { Component, Input } from '@angular/core';
import Category from '../shared/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {

  @Input()
  categories: Category[];

  selectedCategory: Category;
  chosenCategory(selectedCategory: string) {
    this.selectedCategory = this.categories.find(category => category.name === selectedCategory);
  }
}
