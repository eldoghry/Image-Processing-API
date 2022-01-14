//Importing Core Modules
import fs from 'fs';

//Importing Modules
import express from 'express';
import dotenv from 'dotenv';
import createAssetDirectories from './modules/createAssetsDirectories';

//Importing Routers
import apiRouter from './routes/api/apiRouter';
import path from 'path';
////////////////////////////////////////////////////////////////
//Configrations ----------------------------

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
createAssetDirectories();

console.log(path.resolve(process.env.THUMBS_DIR as string, 'magdy.jpg'));

////////////////////////////////////////////////////////////////
//read template markup once when server is up
// const markup = fs.readFileSync(`${__dirname}/../templates/template.html`, 'utf-8');
////////////////////////////////////////////////////////////////
app.use('/api', apiRouter);

//Root Endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome To Image Processing API');
});

//Handling unknown endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Endpoint Not Found code ${res.statusCode}: ${req.originalUrl}`,
  });
});

////////////////////////////////////////////////////////////////
//listening server
app.listen(port, () => {
  console.log(`Listening from http://localhost:${port}/`);
});

export default app;

//TODO: can accept filename and width only (done)
//TODO: upload image to full asset directory from request
