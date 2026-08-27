function deleteNth(arr, n) {
  let count = 0;
  return arr.filter((num) => {
    if (num === n) {
      count++;
      return count <= 2; // Keep the first 2 occurrences
    }
    return true;
  });
}

console.log(deleteNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
