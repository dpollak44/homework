import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
