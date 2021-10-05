import dotenv from 'dotenv';
dotenv.config();

export const config = {
  DATABASE: {
    SQL: {
      host: process.env.DATABASE_MYSQL_HOST,
      database: process.env.DATABASE_MYSQL_DATABASE,
      port: process.env.DATABASE_MYSQL_PORT,
      username: process.env.DATABASE_MYSQL_USER,
      password: process.env.DATABASE_MYSQL_PASSWORD
    },
    NO_SQL: {
      host: process.env.DATABASE_NOSQL_HOST,
      database: process.env.DATABASE_NOSQL_DATABASE,
      port: process.env.DATABASE_NOSQL_PORT,
      username: process.env.DATABASE_NOSQL_USER,
      password: process.env.DATABASE_NOSQL_PASSWORD
    }
  }
};
