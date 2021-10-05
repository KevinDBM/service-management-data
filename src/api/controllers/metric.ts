import { NextFunction, Request, Response } from 'express';
import { responseHttp } from '../utils/response-http';
import { getMetrics as getMetricsService } from '../../services/getMetrics';

export const getMetrics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const metrics = await getMetricsService(parseInt(req.params.owner));
    return responseHttp(res, 200, 'metrics list', metrics);
  } catch (error) {
    next(error);
  }
};
