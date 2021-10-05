import codeRoutes from './code';
const apiBase = '/api/v1';
import { Express } from 'express';

const routes = (app: Express) => {
  app.use(`${apiBase}`, codeRoutes);
};

export default routes;
