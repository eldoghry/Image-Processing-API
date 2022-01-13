import express from 'express';
import path from 'path';
import createImage from '../modules/createImage';

// TODO: validate Path
//check for caching image
// FIXME: return promise from create module

const createImageMiddleware = function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (!req.image?.isExist) {
    createImage(req);
    const filePath = path.resolve(__dirname, `../../assets/thumbs/${req.image?.path}`);
    // res.status(200).send('file exist');
    res.status(200).sendFile(filePath);
  }
  next();
};

export default createImageMiddleware;
