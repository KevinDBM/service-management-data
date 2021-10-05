import { configMysql } from './configMysql';
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  DATABASE: {
    SQL: { ...configMysql },
    NO_SQL: {
      host: process.env.DATABASE_NOSQL_HOST,
      database: process.env.DATABASE_NOSQL_DATABASE,
      port: process.env.DATABASE_NOSQL_PORT,
      username: process.env.DATABASE_NOSQL_USER,
      password: process.env.DATABASE_NOSQL_PASSWORD
    }
  }
};
