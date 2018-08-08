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

export function diff(old, _new) {
  const _old = old.slice(0);
  const fOld = flattenArray(_old);

  const holdNodes = {};

  const motions = [];

  let j = 0; //_old index;
  for (let i = 0, length = _new.length; i < length;) {
    const oldItem = _old[j];
    let newItem = _new[i];

    if (newItem != oldItem) {
      const itemKey = `key_${newItem}`;
      //新的是否在旧的
      const newInOld = fOld[itemKey];
      if (!newInOld) {
        //插入全新的节点
        _old.splice(i, 0, newItem);
        motions.push({
          type: 'insert',
          params: [i, newItem]
        });
        
      } else {
        //决定是否要移除
        if (holdNodes[itemKey] || null == oldItem) {
          _old.splice(j, 0, newItem);
          motions.push({
            type: 'insert',
            params: [j, newItem]
          });
          
        } else {
          //移除原节点
          _old.splice(j, 1);

          motions.push({
            type: 'remove',
            params: [j]
          });
          continue;
        }
      }
    }// end if

    i++;
    j++;
    
  } //end for
  return motions;
}