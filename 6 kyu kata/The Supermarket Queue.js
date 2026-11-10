function queueTime(customers, n) {
  let arr;
  let i;
  let sum = 0;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    const sum = customers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return sum;
  } else if (n >= customers.length) {
    return Math.max(...customers);
  } else {
    arr = new Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
      let shortestTillIndex = 0;
      for (let j = 1; j < n; j++) {
        if (arr[j] < arr[shortestTillIndex]) {
          shortestTillIndex = j;
        }
      }

      arr[shortestTillIndex] += customers[i];
    }
    return Math.max(...arr);
  }
}
