import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myHomeworkApp';
  name = { firstName: 'Alfred', lastName: 'Gluck' };
  address = { street: '123 California Drive', city: 'Jackson', state: 'NJ' }
}
