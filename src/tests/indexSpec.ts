import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoints Testing Suit', () => {
  it('Testing / route', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
