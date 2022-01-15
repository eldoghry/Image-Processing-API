import supertest from 'supertest';
import app from '../index';

//Importing Utilities Specs
import badRequestSpec from './utlities/badRequestSpec';
import cachImageSpec from './utlities/cachImageSpec';
import mainEndpointsSpec from './utlities/mainEndpointsSpec';
import newImageSpec from './utlities/newImageSpec';
import supportedFormatsSpec from './utlities/supportedFormatsSpec';

const request = supertest(app);

describe('Test Endpoints', () => {
  //General Endpoints
  mainEndpointsSpec(request);

  //Testing Creating New Image
  newImageSpec(request);

  //Test supoortedFormat
  supportedFormatsSpec(request);

  //Testing caching
  cachImageSpec(request);

  //Testing Bad Request
  badRequestSpec(request);
});
