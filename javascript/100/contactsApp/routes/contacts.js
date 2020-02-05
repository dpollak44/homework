var debug = require('debug')('contacts:contacts');
var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    db.query('SELECT * FROM contacts', (error, results, fields) => {
        if (error) return next(error);

        res.render('layout', {
            title: 'Contacts',
            partials: { content: 'contacts' },
            contacts: results,
            noContacts: !results.length,
            css: ['contacts']
        });
    });
});


router.route('/addContact')
    .get((req, res, next) => {
        res.render('layout', {
            title: 'Add Contact',
            partials: { content: 'addContact' },
            css: ['addContact']
        });
    })
    .post((req, res, next) => {

        db.query(`INSERT INTO CONTACTS(FirstName, LastName, email, phone)
              VALUES(?, ?, ?, ?)`,
            [req.body.FirstName, req.body.LastName, req.body.email, req.body.phone],
            (error, result) => {
                if (error) return next(error);
                res.redirect('/contacts');
            }
        );
    });

router.get('/deleteContact/:id', (req, res, next) => {

    db.query('DELETE FROM contacts WHERE id=?', [req.params.id], (error, results) => {
        if (error) return next(error);
        debug('Delete results', results);
        if (results.affectedRows === 0) {
            return next(new Error(`Failed to find contact with id ${req.params.id} to delete`));
        }
        res.redirect('/contacts');
    });
});

router.route('/editContact/:id')
    .get((req, res, next) => {
        db.query(`SELECT * FROM CONTACTS  where id = (?)`, [[req.params.id]],
            (error, results, fields) => {
                if (error) return next(error);
                res.redirect('/contacts');
            }
        );
        res.render('layout', {
            title: 'Edit Contact',
            partials: { content: 'editContact' },
            contacts: results,
            css: ['addContact']
        });
    })
    .post((req, res, next) => {

        db.query('UPDATE contacts set (FirstName, LastName, email, phone) = VALUES(?, ?, ?, ?) WHERE id=(?)',
            [req.body.FirstName, req.body.LastName, req.body.email, req.body.phone, [req.params.id]],
            (error, result) => {
                if (error) return next(error);
                res.redirect('/contacts');
            }
        );
    });

module.exports = router;