'use strict';

/** mysqlをモジュール化 */
const mysql = require('mysql2');

/** mysql接続情報 */ // 課題：情報を隠す
/* const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'choko7',
  database: 'care_record'
}); */

const connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'bd939ba228f033',
  password: '080caeba',
  database: 'heroku_74e32341ebb4691'
});

module.exports = connection;
