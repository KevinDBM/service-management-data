import exampleRoutes from './example';
const apiBase = '/api/v1';
import { Express } from 'express';

const routes = (app: Express) => {
  app.use(`${apiBase}`, exampleRoutes);
};

export default routes;
