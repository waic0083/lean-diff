import {
  diff
} from '../src/diff';

function exceuteMovies(arr, ms) {
  ms.forEach(action => {

    let val = action.params;

    let newItem = val[1];
    let position = val[0];

    if ('insert' == action.type) {

      arr.splice(position, 0, newItem);
    } else {
      //remove
      arr.splice(position, 1);
    }

  });
}

it('diff exchange sibling items', () => {
  const before = ['a', 'b', 'c'];
  const after = ['a', 'c', 'b'];

  let ms = diff(before, after);

  expect(ms.length).toBe(2);
  /* eslint no-console:0 */
  // console.log('--->',before)
  exceuteMovies(before, ms);
  
  expect(before).toEqual(after);
  // console.log(ms);
});

it('diff exchange items', () => {

  const before = ['a', 'b', 'c', 'd'];
  const after = ['a', 'c', 'd', 'b'];

  let ms = diff(before, after);

  expect(ms.length).toBe(2);
  exceuteMovies(before, ms);
  /* eslint no-console:0 */
  expect(before).toEqual(after);
  // console.log(ms);
});

it('diff remove one item', () => {

  const before = ['a', 'b', 'c', 'd'];
  const after = ['a', 'b', 'd'];

  let ms = diff(before, after);
  exceuteMovies(before, ms);
  /* eslint no-console:0 */
  expect(before).toEqual(after);
  // console.log(ms);
});

it('reverse items', () => {

  const before = ['a', 'b', 'c', 'd'];
  const after = ['d', 'c', 'b', 'a'];

  let ms = diff(before, after);

  expect(ms.length).toBe(6);

  exceuteMovies(before, ms);
  /* eslint no-console:0 */
  expect(before).toEqual(after);
  // console.log(ms);
});

it('insert items on tail', () => {

  const before = ['a', 'b', 'c'];
  const after = ['a', 'c', 'd', 'b'];

  let ms = diff(before, after);

  expect(ms.length).toBe(3);

  exceuteMovies(before, ms);

  /* eslint no-console:0 */
  expect(before).toEqual(after);
});

it('Inserting items', function () {
  var before = ['a', 'b', 'c', 'd'];
  var after = ['a', 'b', 'e', 'f', 'c', 'd'];
  let ms = diff(before, after);
  expect(ms.length).toBe(2);
  /* eslint no-console:0 */
  exceuteMovies(before, ms);
  // console.log(before)
  expect(before).toEqual(after);
});

it('Moving items from back to front', function () {
  var before = ['a', 'b', 'c', 'd', 'e', 'f'];
  var after = ['a', 'b', 'e', 'f', 'c', 'd', 'g', 'h'];

  let ms = diff(before, after);
  expect(ms.length).toBe(6);
  /* eslint no-console:0 */
  exceuteMovies(before, ms);
  // console.log(before)
  expect(before).toEqual(after);
});

it('Moving items from front to back', function () {
  var before = ['a', 'b', 'c', 'd', 'e', 'f'];
  var after = ['a', 'c', 'e', 'f', 'b', 'd'];

  let ms = diff(before, after);

  /* eslint no-console:0 */
  exceuteMovies(before, ms);
  // console.log(before)
  expect(before).toEqual(after);
});

it('Miscellaneous actions', function () {
  var before = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  var after = ['h', 'i', 'a', 'c', 'd', 'u', 'e', 'f', 'g', 'j', 'b', 'z', 'x', 'y'];
  let ms = diff(before, after);
  /* eslint no-console:0 */
  exceuteMovies(before, ms);
  // console.log(before)
  expect(before).toEqual(after);
});

it('Test with no key: string item and removing', function () {
  var before = ['a', 'b', 'c', 'd', 'e'];
  var after = ['c', 'd', 'e', 'a'];
  
  let ms = diff(before, after);

  expect(ms.length).toBe(3);
  /* eslint no-console:0 */
  exceuteMovies(before, ms);
  // console.log(before)
  expect(before).toEqual(after);
});