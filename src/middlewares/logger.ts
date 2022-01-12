import express from 'express';

const logger = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  console.log(`📄 ${req.path} visited`);
  next();
};

export default logger;
