var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
  next();
});

router.get('/contacts', function (req, res, next) {
  res.render('contacts',
    {
      contacts: [
        { name: 'Donald', phone: '1234567890' },
        { name: 'Joe', phone: '123456789' }
      ]
    });
  next();
});

router.get('/api/contacts', function (req, res, next) {
  let counter = 1;
  res.send(
    {
      contacts: [
        { name: 'Donald', phone: '1234567890' },
        { name: 'Joe', phone: '123456789' }
      ]
    });
});


module.exports = router;
