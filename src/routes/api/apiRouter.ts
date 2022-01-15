import express from 'express';

//Importing Middlewares
import createImageMiddleware from '../../middlewares/createImageMiddleware';
import isNewImageMiddleware from '../../middlewares/isNewImageMiddleware';
import isValidQueryMiddleware from '../../middlewares/isValidQueryMiddleware';

const middlewares = [isValidQueryMiddleware, isNewImageMiddleware, createImageMiddleware];

const apiRouter = express.Router();

apiRouter.route('/images').get(middlewares, (req: express.Request, res: express.Response) => {
  //middleware do everything
});

// apiRouter.route('/images').get(middlewares,()=>{});

export default apiRouter;
