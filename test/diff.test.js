import {diff} from '../src/diff';
it('diff', () => {

  const before = ['a','b', 'c', 'd'];
  const after = ['a', 'c', 'b', 'd'];

  let ms = diff(before,  after);

  /* eslint no-console:0 */
  console.log(ms);
});