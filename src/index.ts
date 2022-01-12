import express from 'express';
import loggerMiddleware from './middlewares/loggerMiddleware'

const app = express();
const port = 4000;

app.use(loggerMiddleware)


//main endpoint
app.get('/', (req, res) => {
  res.send('Welcome To Image Processing API');
});


app.get('/api/image', (req, res) => {
    //1) check if the query is correct ?
    //2) no: reject response with 404 
    //3) yes: check if their are already converted images with same query ? 
    //4) yes return the img
    //5) no: create new image, save it in thumbs, response 
    res.send('Welcome To Image Processing API');
});
  

//handling unkown endpoints  
app.get('*', (req, res) => {
    console.log('wrong route');
    res.statusCode = 404
    res.send(`Wrong Endpoint - ${req.originalUrl}`);
});
  
app.listen(port, () => {
  console.log(`Listening from http://localhost:${port}/`);
});
