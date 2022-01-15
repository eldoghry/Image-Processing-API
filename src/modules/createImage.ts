import sharp, { AvailableFormatInfo } from 'sharp';
import { promises as fsPromises } from 'fs';
import express from 'express';
import path from 'path';

const createSharpFile = async (
  file: Buffer,
  width: number,
  height: number,
  ext: AvailableFormatInfo,
  newPath: string
): Promise<void> => {
  await sharp(file)
    .resize({
      width,
      height,
    })
    .toFormat(ext)
    // .toFormat('jpg')
    .toBuffer()
    .then(async (data) => {
      //1)ensure thumbs dir is exist
      await fsPromises.mkdir(process.env.THUMBS_DIR as string, { recursive: true });

      //2) create new resized image
      const filePath = path.resolve(process.env.THUMBS_DIR as string, newPath);
      const file = await fsPromises.open(filePath, 'a+');
      await file.write(data);

      //3) close file to clean garbage collector
      file.close();

      //console.log('file has been created');
    });
};

const createImage = async (req: express.Request): Promise<void> => {
  //1) read orginal image
  const readingfile = await fsPromises.readFile(`${process.env.FULL_DIR}/${req.image?.filename}.${req.image?.ext}`);

  // if (!readingfile) throw 'Orginal Images is missing';

  const ext = req.image?.ext as unknown as AvailableFormatInfo;
  const width = req.image?.width as number;
  const height = req.image?.height as number;
  const newPath = req.image?.path as string;

  //2) create Sharp File
  await createSharpFile(readingfile, width, height, ext, newPath);
};

export default createImage;
