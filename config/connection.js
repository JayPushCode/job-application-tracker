const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: 'mysql',
    port: 3306,
    socketPath: '/var/run/mysqld/mysqld.sock'
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to MySQL database successful.');
    console.log(sequelize.config);
  })
  .catch(err => {
    console.error('Unable to connect to MySQL database:', err);
  });

module.exports = sequelize;
