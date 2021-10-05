import mongoose from 'mongoose';
import { config } from './config';

export const connectMongo = () => {
  return mongoose.connect(
    `mongodb://${config.DATABASE.NO_SQL.username}:${config.DATABASE.NO_SQL.password}@${config.DATABASE.NO_SQL.host}:${config.DATABASE.NO_SQL.port}`
  );
};
