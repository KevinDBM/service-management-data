import { Sequelize } from 'sequelize';
import { config } from './config';

export const sequelize = new Sequelize(
  config.DATABASE.SQL.database as string,
  config.DATABASE.SQL.username as string,
  config.DATABASE.SQL.password,
  {
    host: config.DATABASE.SQL.host,
    dialect: 'mysql',
    port: parseInt(config.DATABASE.SQL.port as string)
  }
);
