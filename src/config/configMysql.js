const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  host: process.env.DATABASE_MYSQL_HOST,
  database: process.env.DATABASE_MYSQL_DATABASE,
  port: process.env.DATABASE_MYSQL_PORT,
  username: process.env.DATABASE_MYSQL_USER,
  password: process.env.DATABASE_MYSQL_PASSWORD,
  dialect: 'mysql'
};
