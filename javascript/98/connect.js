const app = require('connect')();

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

app.use(require('./middleware'));

app.use('/home', (req, res, next) => {
    res.end('<h1>Homepage!!!</h1>');
});

app.use('/about', (req, res, next) => {
    res.end('<h1>All about cool stuff.</h1>');
});

app.use('/comments', (req, res, next) => {
    res.end('<h1>Your comments here.</h1>');
});


app.listen(81);