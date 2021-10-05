import { Request, Response, NextFunction } from 'express';
import { responseHttp } from '../utils/response-http';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = error.code || 500;
  let message = error.message || '';

  let formattedErrors = error.errors;

  if (error.errors && error.errors.details) {
    formattedErrors = error.errors.details.map((error: any) => {
      return {
        [error.context.key]: error.message
      };
    });
  }
  const data = Object.keys(error.errors).length
    ? {
        errors_list: error.errors
      }
    : {};
  return responseHttp(res, status, message, data);
};
