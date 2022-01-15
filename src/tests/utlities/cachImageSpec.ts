import supertest from 'supertest';

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('Caching images', () => {
    it('donot create new one, code not 200', async () => {
      const response = await request.get('/api/images?filename=test.jpg&width=200&height=300');
      expect(response.statusCode).not.toEqual(201);
    });

    it('cach image, code 200', async () => {
      const response = await request.get('/api/images?filename=test.jpg&width=200&height=300');
      expect(response.statusCode).toEqual(200);
    });
  });
};
