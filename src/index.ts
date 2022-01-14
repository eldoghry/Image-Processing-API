//Importing Core Modules
import fs from 'fs';

//Importing 3rdparty Modules
import express from 'express';
import dotenv from 'dotenv';

//Importing Routers
import apiRouter from './routes/api/apiRouter';
////////////////////////////////////////////////////////////////
//Configrations ----------------------------
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// TODO: create assets dires
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
