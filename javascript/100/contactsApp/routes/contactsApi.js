var debug = require('debug')('contacts:contactsApi');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    db.query('SELECT * FROM contacts', (error, results, fields) => {
        if (error) {
            res.statusCode = 500;
            return res.end(`Unable to fetch contacts: ${error.message}`);
        }

        res.send(results);
    });
});

module.exports = router;