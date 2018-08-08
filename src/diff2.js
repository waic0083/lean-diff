function flattenArray(_array) {
  let tmp = {};

  _array.forEach((item, index) => {
    tmp[`key_${item}`] = {
      index,
      val: item
    };
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

      //新的是否在旧的
      const newInOld = fOld[`key_${newItem}`];
      if (!newInOld) {
        //插入全新的节点
        _old.splice(i, 0, newItem);
        i++;
        j++;
      } else {

        if (null == oldItem) {
          //插入节点
          _old.splice(i, 0, newItem);
          i++;
        } else {
          //移除原节点
          _old.splice(i, 1);

          motions.push({
            type: 'remove',
            params: i
          });
          j++;
        }
      }

    } else {
      i++;
      j++;
    } // end if

  }

  return motions;
}