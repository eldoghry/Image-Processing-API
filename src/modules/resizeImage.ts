import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

interface imageObj {
  filename: string;
  width: number;
  height: number;
}

//TODO: check assets, full, thumbs dir first
// TODO: search resize file first

const resizeImage = async (image: imageObj) => {
  console.log(__dirname);
  const readingfile = await fsPromises.readFile(`${__dirname}/../../assets/full/${image.filename}`);
  console.log(image);

  sharp(readingfile)
    .resize({
      width: image.width,
      height: image.height,
    })
    .toFormat('jpg')
    .toBuffer()
    .then(async (data) => {
      const file = await fsPromises.open(`${__dirname}/../../assets/thumbs/${image.filename}`, 'a+');
      await file.write(data);
      console.log('file has been created');
      file.close();
    });
};

export default resizeImage;
