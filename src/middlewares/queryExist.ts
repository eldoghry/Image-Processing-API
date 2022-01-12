import express from 'express';

//check if there is query {} on the request

const queryExist = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  // TODO: height is madatory ?

  const img = req.query; //{ filename:'image.jpg', width:'200', height:'200'}
  console.log(req.query);

  if (img.filename && img.width && img.height) next();
  else res.status(400).send('BAD REQUEST: Check Endpoint Queries');
};

export default queryExist;
