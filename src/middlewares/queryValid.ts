import express, { query } from 'express';

//check if queries have valid values

const queryValid = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const { filename, width, height } = req.query;
  console.log(filename, width, height);
  next();
};

export default queryValid;
