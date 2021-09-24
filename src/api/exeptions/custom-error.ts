interface ICustomError {
  errors: object;
  code: number;
}

export class CustomError extends Error implements ICustomError {
  public errors;
  public code;
  constructor(code: number, message: string = "", errors: object = {}) {
    super(message);
    this.errors = errors;
    this.code = code;

    Error.captureStackTrace(this, CustomError);
  }
}
