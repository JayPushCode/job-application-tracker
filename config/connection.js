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
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
    }
  );

module.exports = sequelize;