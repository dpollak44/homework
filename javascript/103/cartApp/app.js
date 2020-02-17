var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Cart = require('./cart');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
app.use(session({
  secret: 'mySecret',
  cookie: {
    maxAge: 20000//,
    //secure: true
  },
  resave: false,
  saveUninitialized: false
}));

app.use("/addToCart", (req, res, next) => {
  const cart = new Cart(req.session.cart ? req.session.cart.items : null);
  req.session.cart = cart;
  cart.addItem(req.body.id, req.body.count);
  res.redirect('/');
  next();
});



app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

global.items = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Best pizza ever',
    price: '10.99',
    img: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/sausage-slate-compressed.jpg'
  },
  {
    id: 2,
    name: 'Coke',
    description: 'Ice cold coke!',
    price: '3.49',
    img: 'https://www.cokesolutions.com/content/cokesolutions/site/us/en/products/brands/coca-cola/coca-cola.main-image.290-417.png'
  }
];

module.exports = app;