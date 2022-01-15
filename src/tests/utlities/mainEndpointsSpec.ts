import supertest from 'supertest';

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('General Routs', () => {
    it('server is up, root endpoint', async () => {
      const response = await request.get('/');
      expect(response.statusCode).toEqual(200);
    });

    it('/unkown endpoint return 404', async () => {
      const response = await request.get('/unknown');
      expect(response.statusCode).toEqual(404);
    });
  });
};
