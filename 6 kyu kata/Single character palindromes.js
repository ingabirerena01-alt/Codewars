function solve(s) {
  //..
  if (s.split("").reverse().join("") === s) {
    return "OK";
  }
  for (let i = 0; i < s.length; i++) {
    let modifiedStr = s.slice(0, i) + s.slice(i + 1);
    if (modifiedStr.split("").reverse().join("") === modifiedStr) {
      return "remove one";
    }
  }
  return "not possible";
}
