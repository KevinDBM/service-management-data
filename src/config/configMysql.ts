const dotenv = require('dotenv');
dotenv.config();

export const configMysql = {
  host: process.env.DATABASE_MYSQL_HOST,
  database: process.env.DATABASE_MYSQL_DATABASE,
  port: process.env.DATABASE_MYSQL_PORT,
  username: process.env.DATABASE_MYSQL_USER,
  password: process.env.DATABASE_MYSQL_PASSWORD
};
