var express = require('express');
var router = express.Router();
// const db = require('../pool');
// const ApiError = require('./apiError');
var cors = require('cors');

router.use(cors());

router.route('/')

    .get((req, res, next) => {

        db.query('SELECT * FROM recipes2', (error, results, fields) => {
            // if (error) return next(new ApiError(`Unable to fetch contacts ${error.message}`));
            res.send(results);
        });
    })

    .post((req, res, next) => {

        db.query(`INSERT INTO recipes2(name, ingredients, directions)
                  VALUES(?, ?, ?)`,
            [req.body.name, req.body.ingredients, req.body.directions],
            (error, result) => {
                // if (error) return next(new ApiError(`Unable to add contact ${error.message}`));
                // if (!result.affectedRows) return next(new ApiError(`Unable to add contact`));

                res.status(201);
            }
        );
    });

module.exports = router;

