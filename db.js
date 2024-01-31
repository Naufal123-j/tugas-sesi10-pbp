const mysql = require('mysql');

const connection = mysql.createConnectiion({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kuliah',
});

connection.connect((err) => {
    if (err){
        console.error('error connecting to mysql database:', err);
    } else {
        console.log('connected to mysql database');
    }
});

module.export = connection;