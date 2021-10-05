import { NextFunction, Request, Response } from 'express';
import { responseHttp } from '../utils/response-http';
import { addCode as addCodeService } from '../../services/addCode';

export const addCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCodeData = await addCodeService(req.body);
    return responseHttp(res, 201, 'new code registered', newCodeData);
  } catch (error) {
    next(error);
  }
};
