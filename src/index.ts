import express from 'express';

//importing middlewares
import queryExist from './middlewares/queryExist';
import queryValid from './middlewares/queryValid';
// import logger from './middlewares/logger'

//Importing Modules
import resizeImage from './modules/resizeImage';

const app = express();
const port = 4000;
// const middlewares = [queryExist, queryValid];
const middlewares = [queryExist];

// app.use(logger)
//http://localhost:4000/api/image?filename=image.jpg&width=200&height=100

//main endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome To Image Processing API');
});

app.get('/api/image', middlewares, (req: express.Request, res: express.Response) => {
  //1) check if the query is correct ?
  //2) no: reject response with 404
  //3) yes: check if their are already converted images with same query ?
  //4) yes return the img
  //5) no: create new image, save it in thumbs, response

  // res.statusCode = 200

  const { filename, width, height } = req.query;
  resizeImage({
    filename: `${filename as unknown as string}.jpg`,
    width: +(width as unknown as number),
    height: +(height as unknown as number),
  });

  res.status(200).send('Image processing');
});

//handling unknown endpoints
app.get('*', (req, res) => {
  res.status(404).send(`Endpoint Not Found: ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Listening from http://localhost:${port}/`);
});

export default app;
