import supertest from 'supertest';
import deleteThumbsDir from '../../modules/deleteThumbsDir';

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('Creating New Image With suported formats', () => {
    beforeAll(async () => {
      //delete old cached images directory first
      await deleteThumbsDir();
    });

    it('without extension, code 201', async () => {
      const response = await request.get('/api/images?filename=fjord.jpg&width=200&height=300');
      expect(response.statusCode).toEqual(201);
    });

    it('with JPG, code 201', async () => {
      await deleteThumbsDir();
      const response = await request.get('/api/images?filename=fjord.jpg&width=200&height=300');
      expect(response.statusCode).toEqual(201);
    });

    it('with JPEG, code 201', async () => {
      const response = await request.get('/api/images?filename=fjord.jpeg&width=200&height=300');
      expect(response.statusCode).toEqual(201);
    });

    it('with PNG, code 201', async () => {
      const response = await request.get('/api/images?filename=fjord.png&width=200&height=300');
      expect(response.statusCode).toEqual(201);
    });

    it('with WEBP, code 201', async () => {
      const response = await request.get('/api/images?filename=fjord.webp&width=200&height=300');
      expect(response.statusCode).toEqual(201);
    });
  });
};
