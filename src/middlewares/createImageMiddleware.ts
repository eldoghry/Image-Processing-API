import express from 'express';
import path from 'path';
import createImage from '../modules/createImage';

//check for caching image
// FIXME: return promise from create module

const createImageMiddleware = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  if (!req.image?.isExist) {
    try {
      //console.log('Will Create New Image');

      //1) create File
      await createImage(req);

      //2) resolve file path
      const filePath = path.resolve(process.env.THUMBS_DIR as string, req.image?.path as string);

      //3) return image
      res.status(201).sendFile(filePath);

      // console.log('create image middleware');
    } catch (error: any) {
      res.status(400).json({
        status: 'fail',
        message: error.errno === -4058 ? 'Orignal Image not uploaded' : error.message,
        error,
      });
    }
  }

  next();
};

export default createImageMiddleware;
