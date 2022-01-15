import supertest from 'supertest';
import deleteThumbsDir from '../../modules/deleteThumbsDir';

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('Creating New Image API Routes /api/images', () => {
    beforeAll(async () => {
      //delete old cached images directory first
      await deleteThumbsDir();
    });
    it('with (filename, width, height), code 201', async () => {
      const response = await request.get('/api/images?filename=test&width=200&height=300');
      expect(response.statusCode).toEqual(201);
    });

    it('with only (filename, width), code 201', async () => {
      const response = await request.get('/api/images?filename=test&width=200');
      expect(response.statusCode === 200 || response.statusCode === 201).toEqual(true);
    });
  });
};
