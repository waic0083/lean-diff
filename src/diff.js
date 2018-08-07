function flattenArray(_array) {
  let tmp = {};

  _array.forEach(item => {
    tmp[`key_${item}`] = item;
  });

  return tmp;
}

export function insert(list, item, i) {
  list.splice(i, 0, item);
  return list;
}

export function diff(_old, _new) {
  // const fOld = flattenArray(_old);
  const fNew = flattenArray(_new);

  const motions = [];

  let j = 0; //_old index;
  for (let i = 0, length = _new.length; i < length;) {
    const oldItem = _old[j];
    const newItem = _new[i];

    //新的是否存在旧之中
    if (newItem != oldItem) {

      // const key = `key_${oldItem}`;

      if( !fNew[`key_${oldItem}`] ){
        //原节点不在新列表内
        motions.push({
          type: 'remove',
          params:i
        });
        i++;
      }
      else {
        //前移节点
        motions.push({
          type: 'insert',
          params: [
            newItem, i < j ? i : j
          ]
        });
      }
    }
    else{
      i++;
    }
    j++;
  }

  return motions;
}