const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

try {
  sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: process.env.DB_HOSTNAME || 'localhost',
      dialect: 'mysql',
      port: parseInt(process.env.DB_PORT) || 3306
    }
  );
} catch (error) {
  console.error("An error occurred while setting up Sequelize:", error);
}

module.exports = sequelize;