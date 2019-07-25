function sum(fromN, toN) {
  let total = fromN;
  if(fromN < toN) {
  return total += sum(++fromN,toN);
  }
  return total;
}

module.exports = sum;
