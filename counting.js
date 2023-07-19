const countingZeros = n => {
  let count = 0;
  let divider = 10;

  while (n >= divider) {
    count += Math.floor(n / divider);
    divider *= 10;
  }

  return count;
}
console.log(countingZeros(200))
