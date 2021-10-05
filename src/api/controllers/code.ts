import { NextFunction, Request, Response } from 'express';
import { responseHttp } from '../utils/response-http';

export const addCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return responseHttp(res, 200, 'ok');
  } catch (error) {
    next(error);
  }
};
