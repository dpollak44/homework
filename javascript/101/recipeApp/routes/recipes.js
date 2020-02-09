var express = require('express');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        db.query('SELECT * FROM recipes', (error, results, fields) => {
            if (error) {
                res.statusCode = 500;
                return res.end(`Unable to fetch contacts: ${error.message}`);
            }
            res.send(results);
        });
    })
    .post((req, res, next) => {

        db.query(`INSERT INTO recipes(name, ingredients, instructions)
                  VALUES(?, ?, ?)`,
            [req.body.name, req.body.ingredients, req.body.instructions],
            (error, result) => {
                if (error) {
                    return res.end(`Unable to fetch contacts: ${error.message}`);
                }
                if (!result.affectedRows) return res.end(`Unable to add recipe`);

                res.status(201).send(recipe);
            }
        );
    });

router.route('/:id')
    .get((req, res, next) => {
        db.query('SELECT * FROM recipes WHERE id = ?',
            [req.params.id],
            (error, [result], fields) => {
                if (error) return res.end(`Unable to get recipe ${req.params.id} ${error.message}`);
                if (!result) return res.end(`Unable to get recipe ${req.params.id}`, 404);

                res.send(result);
            });
    })
    .put((req, res, next) => {
        db.query(`UPDATE recipes SET name = ?, ingredients = ?, instructions = ?
              WHERE id = ?`,
            [req.body.name, req.body.ingredients, req.body.instructions, req.body.id],
            (error, result) => {
                if (error) return res.end(`Unable to update recipe ${req.params.id} ${error.message}`);
                console.log(result);
                if (!result.changedRows) return res.end(`Unable to update recipe`, 404);

                res.status(204).end();
            }
        );
    })
    .delete((req, res, next) => {
        db.query(`DELETE FROM recipes WHERE id = ?`,
            [req.params.id],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to delete recipe ${req.params.id} ${error.message}`));
                if (!result.affectedRows) return res.end(`Unable to delete recipe ${req.params.id}`, 404);

                res.status(204).end();
            }
        );
    });

router.use((error, req, res, next) => {
    res.status(error.statusCode || 500)
        .send({ error: error.message });
});

module.exports = router;