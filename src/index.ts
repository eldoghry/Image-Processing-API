//Importing Core Modules
import fs from 'fs';

//Importing 3rdparty Modules
import express from 'express';
import dotenv from 'dotenv';

//Importing middlewares
import isValidQueryMiddleware from './middlewares/isValidQueryMiddleware';
import isNewImageMiddleware from './middlewares/isNewImageMiddleware';
import createImageMiddleware from './middlewares/createImageMiddleware';

// Global Config ----------------------------
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const middlewares = [isValidQueryMiddleware, isNewImageMiddleware, createImageMiddleware];

//read template markup once when server is up
const markup = fs.readFileSync(`${__dirname}/../templates/template.html`, 'utf-8');

// Routes Endpoints -----------------------------------
//Root Endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome To Image Processing API');
});

//middlewares do everythings
app.get('/api/images', middlewares, (req: express.Request, res: express.Response) => {});

//handling unknown endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Endpoint Not Found code ${res.statusCode}: ${req.originalUrl}`,
  });
});

console.log(app.locals.title);

//listening server
app.listen(port, () => {
  console.log(`Listening from http://localhost:${port}/`);
});

export default app;
