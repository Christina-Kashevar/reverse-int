module.exports = function reverse (n) {
  if (n >=0) {
    return n = +n.toString().split('').reverse().join('');
  }
  if (n < 0){
    return n = +n.toString().split('').slice(1).reverse().join('');
  }
}
