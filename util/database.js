const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: 'Baumkastanien3'
})

module.exports = pool.promise();