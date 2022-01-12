import test from '../../modules/test';

describe('1st suite', () => {
  it('test spec: test(5) is equal 5', () => {
    expect(test(5)).toEqual(5);
  });
});
