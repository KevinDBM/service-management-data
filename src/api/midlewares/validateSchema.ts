import { NextFunction, Request, Response } from 'express';
import { UserError } from '../exeptions/user-error';

export const validateSchema =
  schema => (req: Request, res: Response, next: NextFunction) => {
    try {
      let params = req.body;

      const configJoi = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
      };

      const { error } = schema.validate(params, configJoi);

      if (error) {
        return next(new UserError('payload with errors', error));
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
