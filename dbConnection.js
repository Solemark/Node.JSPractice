var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'usernameABC',
    password: 'password123',
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    /*
    var sql = 'CREATE DATABASE mybd';
    var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))';
    var sql = 'ALTER TABLE customers ADD Column id Int AUTO_INCREMENT PRIMARY KEY';
    var sql = 'INSERT INTO customers (name, address) Values (\'customerName\', \'custoemrAddress\')';
    var values =[
        ['John', '123 Test st'],
        ['Amy', '456 Test crt'],
        ['Andrew', '789 Test pl']
    ]
    var sql = 'INSERT INTO customers (name, address) Values ?';
    var sql = 'SELECT * FROM customers';
    var sql = 'SELECT * FROM customers WHERE address LIKE \'TEST%\'';
    var adr = '123 Test st';
    var sql = 'SELECT * FROM customers WHERE Address = ' + mysql.escape(adr);
    var name = 'John';
    var adr = '123 Test st';
    var sql = 'SELECT * FROM customers WHERE name = ? OR Address = ?';
    var sql = 'DELETE FROM customers WHERE adress = \'123 Test st\'?';
    var sql = 'DROP TABLE customers';
    var sql = 'DROP TABLE IF EXISTS customers';
    var sql = 'UPDATE customers SET address = \'321 TEST st\' WHERE address = \'123 Test st\'';
    var sql = 'SELECT * FROM customers LIMIT 5';
    var sql = 'SELECT * FROM customers LIMIT 5 OFFSET 2';
    */

    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
    
    con.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Inserted " + result.affectedRows + " rows");
    });

    con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log(result + fields);
    });

    con.query(sql, [name, adr], function(err, result){
        if(err) throw err;
        console.log(result);
    });
});