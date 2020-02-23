var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb+srv://dpollak44:oNvHqzMbvPI4p1c9@cluster0-hx4kv.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true });

async function callMongo() {

  //const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

  try {
    await client.connect();



    const FruitsAndVeggiesCollection = client.db('groceries').collection('FruitsAndVeggies');

    await findOneListing(FruitsAndVeggiesCollection, 'Banana');


  } catch (err) {
    console.error(err);
  }
}

async function findOneListing(collection, name) {
  const result = await collection.findOne({ name: name });
  if (result) {

    res.send(result);
  }
}

callMongo().catch(err => console.error(err));



async function postToMongo() {


  try {
    await client.connect();

    const FruitsAndVeggiesCollection = client.db('groceries').collection('FruitsAndVeggies');

    await NewListing(FruitsAndVeggiesCollection, 'Apple');


  } catch (err) {
    console.error(err);
  }


  async function NewListing(collection, name) {
    const result = await collection.insertOne({ name: name });
    if (result) {

      res.send(result);
    }
  }
}

postToMongo().catch(err => console.error(err));



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
