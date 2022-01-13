import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';

// TODO: validate Path
//check for caching image

const isNewImage = async function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  //try to open and read file witout creating it
  try {
    const file = await fsPromises.open(`./assets/thumbs/${req.image?.path}`, 'r');
    file.close();
    req.image!.isExist = true;
    const filePath = path.resolve(__dirname, `../../assets/thumbs/${req.image?.path}`);
    // res.status(200).send('file exist');

    console.log('Return existing image');
    res.status(200).sendFile(filePath);
  } catch (error) {
    //not found ? create new, else send
    next();
  }
};

export default isNewImage;
