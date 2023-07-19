const gcd =( a, b) => {
    while (b != 0) {
      let temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }