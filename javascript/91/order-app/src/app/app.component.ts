import { Component, ViewEncapsulation } from '@angular/core';
import { Order } from 'shared/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-app';

  order: Order = {

    customer: {
      firstName: 'Larry',
      lastName: 'Jones',
      address: {
        street: '1444 Hirley Ave.',
        city: 'Binghamton',
        state: 'VA',
        zip: '61614'
      }
    },

    item: {
      name: 'dell inspiron',
      price: '$500',
      description: 'laptop'
    }

  };

}