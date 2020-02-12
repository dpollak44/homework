var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const cookieSettings = req.cookies['settings'] ? JSON.parse(req.cookies['settings']) : {};

  const settings = {
    color: req.query.color || cookieSettings.color || '#000000',
    bgColor: req.query.bgcolor || cookieSettings.bgColor || 'white'
  };

  res.cookie('settings', JSON.stringify(settings));

  res.locals.color = settings.color;
  res.locals.bgColor = settings.bgColor;

  next();
});



app.use((req, res, next) => {

  let cookieCounter = req.cookies['counter'] ? parseInt(req.cookies['counter'], 10) + 1 : 1;

  res.cookie('counter', cookieCounter);

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

module.exports = app;
