import express from 'express';

//check if queries have valid values

/* 

image object shape {
  filename: imageName,
  ext: 'jpg',
  width: 200,
  height:200,
  path: imageName-200X200.jpg
}
*/

// idea: create custome image prorperty in express request {}
const isValidQueryMiddleware = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  try {
    const filename = req.query.filename as string;
    const width = +(req.query.width as unknown as number);

    if (!filename || !width) throw 'Bad Request!, Please check endpoint queries';

    if (filename && width) {
      const height = req.query.height ? +(req.query.height as unknown as number) : width;
      const [name, ext] = filename.toLowerCase().split('.');
      // console.log(ext, typeof ext);
      // const newExt =  ext ? ext : 'jpg';

      //extentions
      const allowedFormats = process.env.IMG_FORMAT?.toLowerCase().split(',');

      if (ext && !allowedFormats?.includes(ext)) throw 'Unsupported Image Extension';

      //added to custom type
      req.image = {
        filename: name.toLowerCase(),
        width,
        height,
        ext: ext || 'jpg',
        path: `${name}-${width}X${height}.${ext || 'jpg'}`,
        isExist: false,
      };

      next();
    }
  } catch (error: unknown) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

export default isValidQueryMiddleware;
