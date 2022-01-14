import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoints Testing Suit', () => {
  it('root endpoint / return 200, server is up', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  it('/unkown endpoint return 404', async () => {
    const response = await request.get('/unknown');
    expect(response.status).toEqual(404);
  });

  it('/api/images endpoint without parameters return 400 bad request', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toEqual(400);
  });
});
