interface createErrorProp {
  message: string;
  statusCode: number;
}

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export const createError = ({ message, statusCode }: createErrorProp) => {
  const error = new CustomError(message, statusCode)
  error.statusCode = statusCode
  throw error;
};
