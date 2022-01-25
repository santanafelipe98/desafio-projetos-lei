const mysql = require('mysql');

// Cria conexão com o banco de dados

const connection = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
}

module.exports = () => connection;