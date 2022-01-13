import sharp, { AvailableFormatInfo, FormatEnum, Sharp } from 'sharp';
import { promises as fsPromises } from 'fs';
import express from 'express';

//TODO: check assets, full, thumbs dir first
// TODO: search resize file first

const createImage = async (req: express.Request): Promise<void> => {
  try {
    //read original file from full path
    const readingfile = await fsPromises.readFile(
      `${__dirname}/../../assets/full/${req.image?.filename}.${req.image?.ext}`
    );
    const ext = req.image?.ext as unknown as AvailableFormatInfo;

    return sharp(readingfile)
      .resize({
        width: req.image?.width,
        height: req.image?.height,
      })
      .toFormat(ext)
      .toBuffer()
      .then(async (data) => {
        const file = await fsPromises.open(`${__dirname}/../../assets/thumbs/${req.image?.path}`, 'a+');
        await file.write(data);
        file.close();
        console.log('file has been created');
      });
  } catch (error: unknown) {
    console.log(`⛔ ${error}`);
  }
};

export default createImage;
