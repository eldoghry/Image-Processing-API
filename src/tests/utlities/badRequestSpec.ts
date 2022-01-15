import supertest from 'supertest';

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('Bad Request API Routes /api/images', () => {
    it('without any parameters return 400 bad request', async () => {
      const response = await request.get('/api/images');
      expect(response.statusCode).toEqual(400);
    });

    it('string width is bad request', async () => {
      const response = await request.get('/api/images?filename=fjord&width="200"&height=300');
      expect(response.statusCode).toEqual(400);
    });

    it('string height is bad request', async () => {
      const response = await request.get('/api/images?filename=fjord&width=200&height="300"');
      expect(response.statusCode).toEqual(400);
    });

    it('wrong filename, missing original image', async () => {
      const response = await request.get('/api/images?filename=notfound&width=200&height=300');
      expect(response.statusCode).toEqual(400);
    });
  });
};
