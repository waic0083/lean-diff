import {diff} from '../src/diff2';
it('diff exchange sibling items', () => {

  const before = ['a','b', 'c', 'd'];
  const after = ['a', 'c', 'b', 'd'];

  let ms = diff(before,  after);

  /* eslint no-console:0 */
  console.log(before)
  console.log(ms);
});

// it('diff exchange items', () => {

//   const before = ['a','b', 'c', 'd'];
//   const after = ['a', 'c', 'd', 'b'];

//   let ms = diff(before,  after);

//   /* eslint no-console:0 */
//   console.log(before)
//   console.log(ms);
// });

// it('diff remove one item', () => {

//   const before = ['a','b', 'c', 'd'];
//   const after = ['a', 'b', 'd'];

//   let ms = diff(before,  after);

//   /* eslint no-console:0 */
//   console.log(before)
//   console.log(ms);
// });