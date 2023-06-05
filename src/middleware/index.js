// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "db-mysql-1",
//   synchronize: true,
//   logging: true,
//   entities: ["src/models/*.js"],
// });

var typeorm = require("typeorm");

var connection = new typeorm.DataSource({
  type: "mysql",
  host: "0.0.0.0",
  port: 3307,
  user: "hangnt",
  password: "123456",
  database: "db-mysql-1",
  synchronize: true,
  logging: true,
  entities: ["src/models/*.js"],
});
// CREATE TABLE Persons (
//     PersonID int,
//     LastName varchar(255),
//     FirstName varchar(255),
//     Address varchar(255),
//     City varchar(255)
// );
module.exports = connection;
