import express from 'express';

//importing middlewares
import fs from 'fs';
// import logger from './middlewares/logger'

//Importing Modules
import createImage from './modules/createImage';
import replaceTemplate from './modules/replaceTemplate';
import path from 'path';
import isValidQuery from './middlewares/isValidQuery';
import isNewImage from './middlewares/isNewImage';
import createImageMiddleware from './middlewares/createImageMiddleware';

const app = express();
const port = 4000;
const middlewares = [isValidQuery, isNewImage, createImageMiddleware];

//read template markup once when server is up
const markup = fs.readFileSync(`${__dirname}/../templates/template.html`, 'utf-8');

// app.use(logger)

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
  // createImage(req);
  // res.status(200).send('Image processing');
  // res.status(200).send(replaceTemplate('newfile', `http://localhost:4000/assets/${filename}.jpg`, markup));
  // res.status(200).send('create new image');
});

app.get('/assets/:filename', (req, res) => {
  const file = path.resolve(__dirname, '../assets/thumbs/', req.params.filename);
  res.sendFile(file);
});

//handling unknown endpoints
app.get('*', (req, res) => {
  res.status(404).send(`Endpoint Not Found: ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Listening from http://localhost:${port}/`);
});

export default app;
