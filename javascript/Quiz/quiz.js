(function () {
    'use strict';

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(custName, custAddress, items) {
            this.custName = custName;
            this.custAddress = custAddress;
            this.items = items;


        }


       gettotal() {
            let total = 0;
            this.items.forEach(item => {
                total += (item.price * item.quantity);

            });

            return total;
        }
    }

    fetch('quiz.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(order => {
            //console.log(order);
            const item1 = new Item(order[0].items[0].item, (order[0].items[0].total / order[0].items[0].quantity), order[0].items[0].quantity);
            console.log(item1);
            const item2 = new Item(order[0].items[1].item, (order[0].items[1].total / order[0].items[1].quantity), order[0].items[1].quantity);
            console.log(item2);
            const itemArray = [item1, item2];
            const Ord1 = new Order(order[0].customer, order[0].address, itemArray);
            console.log(Ord1);
            console.log(Ord1.total());

        })
        .catch(err => console.error(err));




}());
