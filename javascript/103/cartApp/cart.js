
class Cart {
    constructor(items) {
        this.items = items || {};
    }

    addItem(id, count) {
        const cc = this.items[id] || 0;
        this.items[id] = cc + +count;
    }

    getItems() {
        return this.items;
    }
}

module.exports = Cart;