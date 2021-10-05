import helmet from 'helmet';
import dotenv from 'dotenv';
import app from './server';

dotenv.config();

export const initApi = () => {
  const PORT = process.env.PORT || 8000;

  app.use(helmet());

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} ⚡`);
  });
};
