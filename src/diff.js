function flattenArray(_array) {
  let tmp = {};

  _array.forEach((item, index) => {
    tmp[`key_${item}`] = {index, val: item};
  });

  return tmp;
}

export function insert(list, item, i) {
  list.splice(i, 0, item);
  return list;
}

export function diff(_old, _new) {
  const fOld = flattenArray(_old);
  const fNew = flattenArray(_new);

  const motions = [];

  let j = 0; //_old index;
  for (let i = 0, length = _new.length; i < length;) {
    const oldItem = _old[j];
    let newItem = _new[i];

    if (newItem != oldItem) {

      // const key = `key_${oldItem}`;

      if (!fNew[`key_${oldItem}`]) {
        //原节点不在新列表内
        _old.splice(i, 1);
        motions.push({
          type: 'remove',
          params: j
        });
        i++;
      } else {

        //新节点是否在旧节点中
        let itemToMove = fOld[`key_${newItem}`];
        if( itemToMove ){
          //移除再插入
          _old.splice(itemToMove.index, 1);

          motions.push({
            type: 'remove',
            params: itemToMove.index
          });

          newItem = itemToMove.val;

        }

        //插入节点
        motions.push({
          type: 'insert',
          params: [
            newItem, j
          ]
        });

        _old.splice(j, 0, newItem);

        i++;
        j++;
      }
    } else {
      i++;
      j++;
    } // end if

  }

  return motions;
}