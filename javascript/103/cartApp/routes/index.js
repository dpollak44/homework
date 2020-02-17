var express = require('express');
var router = express.Router();
const Cart = require('C:/Users/david/Documents/Dovid/PCS/homework/javascript/103/cartApp/cart.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Express',
    items: global.items,
    css: ['index'],
    partials: { content: 'index' }
  });
  next();
});





router.get('/cart', function (req, res, next) {
  const cart = new Cart(res.session.cart ? res.session.cart.getItems() : null);
  res.session.cart = cart;
  res.locals.cartItems = res.session.cart;



  res.render('layout', {
    title: 'Hello',
    items: res.locals.cartItems,
    partials: { content: 'cart' }
  });
  next();
});









module.exports = router;