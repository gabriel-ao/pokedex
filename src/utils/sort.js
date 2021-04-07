/* eslint-disable no-extend-native */

export default Array.prototype.sortBy = function (key) {
  if (this[0].hasOwnProperty(key)) {
    this.sort(function (a, b) {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  } else {
    throw new Error('chave de ordenar não existe');
  }
};
