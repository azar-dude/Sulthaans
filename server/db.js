const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',    // <- Force IPv4
    port: 3306,
    user: 'root',
    password: 'Root@12345',
    database: 'sla'
});


db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;
