module.exports = function towelSort(array) {
  if (array === undefined || array.length == 0)
    return [];
  else
    for (let i = 1; i < array.length; i++) {
      if (i % 2 !== 0) {
        array[i] = array[i].reverse();
      }
    }
  return array.flat(Infinity);
}