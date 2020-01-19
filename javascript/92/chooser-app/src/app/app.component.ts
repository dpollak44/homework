import { Component } from '@angular/core';
import Category from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chooser-app';
  categories: Category[] = [{
    name: 'fruit',
    items: [{
      name: 'orange',
      price: .59
    }, {
      name: 'apple',
      price: .39
    }]
  }, {
    name: 'freezer',
    items: [{
      name: 'gefilte fish',
      price: 5.00
    }, {
      name: 'kishke',
      price: 2.50
    }]
  }]
}