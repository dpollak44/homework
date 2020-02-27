var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var db = require('../pool');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'dpollak',
  password: 'password',
  database: 'pcs'
});

// module.exports = pool;





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/login', function (req, res, next) {

  db.query('SELECT password FROM users WHERE user = ?',
    [req.body.user], (error, results) => {
      if (error) return next(error);
      if (!results.length) return next(new Error('Invalid username and password'));
      res.locals.user = req.body.user;
    });

  db.query('SELECT user FROM users WHERE password = ?',
    [req.body.password], (error, results) => {
      if (error) return next(error);
      if (!results.length) return next(new Error('Invalid username and password'));
    });

  res.redirect('/topSecret');
});

app.get('/topSecret', function (req, res, next) {
  res.send(`Hello ${res.locals.user}`);
});



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

module.exports = app;
