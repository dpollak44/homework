import { Component } from '@angular/core';
import { NameComponent } from './name/name.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = { firstName: 'Donald', lastName: 'Trump' }
  address = { street: '123 California Road', city: 'Jackson' }
}
