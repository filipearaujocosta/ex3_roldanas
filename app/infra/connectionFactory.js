var mysql = require('mysql');
module.exports = function(){
    return mysql.createConnection({
        host:'roldana.c0bkp8fbp76u.us-east-1.rds.amazonaws.com',
        user:'root',
        password:'Pa$$4eit',
        database:'roldanaDB'
    });
}
