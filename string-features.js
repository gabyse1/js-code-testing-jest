const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('String length out of value interval.');
  }
  return str.length;
};

const stringReverse = (str) => [...str].reverse().join('');

const stringCapitalize = (str) => {
  if (str === +str) throw new Error('Invalid string, it does not be a number.');
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
};

module.exports = [stringLength, stringReverse, stringCapitalize];