import codeRoutes from './code';
import MetricRoutes from './metric';
const apiBase = '/api/v1';
import { Express } from 'express';

const routes = (app: Express) => {
  app.use(`${apiBase}`, codeRoutes);
  app.use(`${apiBase}`, MetricRoutes);
};

export default routes;
