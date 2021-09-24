import { NextFunction, Request, Response } from 'express';

export const exampleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).send('Example OK');
  } catch (error) {
    next(error);
  }
};
