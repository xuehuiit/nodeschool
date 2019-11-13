//db.js
// 连接MySQL
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'zzydemo'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}
exports.query = query;
