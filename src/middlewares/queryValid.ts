import express from 'express';

//check if queries have valid values

const queryValid = function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  const filename: string = req.query.filename as string;
  const width: number = +(req.query.width as unknown as number);
  const height: number = +(req.query.height as unknown as number);
  // const fisle = `${filename}.jpg`;

  // req.image = {
  //   file: file,
  //   filename: filename,
  //   width: width,
  //   height: height,
  // };

  // console.log(req.image);
  next();
};

export default queryValid;
