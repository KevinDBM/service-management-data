import { ValidationError } from 'joi';

interface IUserError {
  errors: object;
}

export class UserError extends Error implements IUserError {
  public errors;
  public code;
  constructor(message: string = '', errors: ValidationError) {
    super(message);
    this.errors = errors.details.map((error: any) => {
      return {
        [error.context.key]: error.message
      };
    });
    this.code = 400;

    Error.captureStackTrace(this, UserError);
  }
}
