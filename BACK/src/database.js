const mysql = require('mysql2');
const {database} = require('./keys');
//existe create connection pero pool es mas cercano a un entorno de produccion. Tiene una especie de hilos que se ejecutan
const db = mysql.createPool(database);

db.getConnection((err, conn) => {
    if (err) throw err;
    console.log('DataBase Connected');
});

module.exports = db;