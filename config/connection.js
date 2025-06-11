const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
const {
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  DB_HOSTNAME
} = process.env;

sequelize = new Sequelize(MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWORD,
  {
    host: DB_HOSTNAME || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    socketPath: '/var/run/mysqld/mysqld.sock',
    logging: process.env.SEQUELIZE_LOGGING === 'true' ? console.log : false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to MySQL database successful.');
    if (process.env.NODE_ENV !== 'production') {
      console.log(sequelize.config);
    }
  })
  .catch(err => {
    console.error('Unable to connect to MySQL database:', err);
  });

module.exports = sequelize;
