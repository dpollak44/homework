const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'dpollak2',
    password: 'TzviYehuda1',
    database: 'pcs'
});

module.exports = pool;