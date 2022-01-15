import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';

// TODO: validate Path
//check caching image

//Idea: read file witout creation from thumbs dir ?
// Yes: return file
// No: create it

const isNewImageMiddleware = async function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  try {
    const filePath = path.resolve(`${path.resolve(process.env.THUMBS_DIR as string, req.image?.path as string)}`);
    const file = await fsPromises.open(filePath, 'r');

    file.close();

    req.image!.isExist = true;

    // console.log('Return existing image');

    res.status(200).sendFile(filePath);
  } catch (error) {
    next();
  }
};

export default isNewImageMiddleware;
