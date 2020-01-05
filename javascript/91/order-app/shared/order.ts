import { Customer } from './customer';
import { Item } from './item';

export interface Order {
    customer: Customer;
    item: Item;
}