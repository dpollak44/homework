const url = require('url');

module.exports = function (req, res, next) {
    const parsedUrl = url.parse(req.url, true);
    req.query = parsedUrl.query;
    if (req.query.password !== 'PCS') {
        res.end('<h1>Get Lost!!!</h1>');
    }
    else {
        next();
    }
};
