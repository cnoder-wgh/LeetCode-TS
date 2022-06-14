import intersection from './index';

describe('intersection ', () => {
  test('Gets right the intersection of two arrays ', () => {
    const res = intersection([2, 3, 3, 1], [3, 1, 8]);
    expect(res).toEqual([3, 1]);
  });
});
