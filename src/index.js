module.exports = function reverse (n) {
  let arr = Math.abs(n).toString().split('').reverse();
  return +arr.join('');
}
