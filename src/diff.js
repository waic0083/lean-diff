function flattenArray(_array) {
  let tmp = {};

  _array.forEach(item => {
    tmp[`key_${item}`] = item;
  });

  return tmp;
}

export function diff(_old, _new) {
  const fOld = flattenArray(_old);
  const fNew = flattenArray(_new);

  for (let i = 0, length = _new.length; i < length; i++) {
    const oldItem = _old[i];
    const newItem = _new[i];

    //新的是否存在旧之中
    if (_new[i] != oldItem) {
      
      if( fOld[`key_${newItem}`] ){
        //判断下标位置
      }
      else{
        //新增节点
      }
    }
  }
}