function conv(num) {
  const digitToEnglish = (digit) => {
    const words = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    return words[digit] || "Not a single digit";
  };
  let number;
  let capital;
  function dupli(callback) {
    number = callback;
    capital = number.toUpperCase();
    return `${number}${capital}`;
  }
  function duplio(callback) {
    number = callback;
    capital = number.toUpperCase();
    return `${capital}${number}`;
  }
  let newarr;
  let withspace;
  const digits = String(num).split("");
  if (digits.length % 2 === 0) {
    // const digits= num.
    newarr = digits.map((nu, index) => {
      if (nu % 2 === 0) {
        let withnouppercase = dupli(digitToEnglish(nu))
          .repeat(index + 1)
          .slice(0, index + 1);
        return withnouppercase;
      }
      return nu;
    });
  }
}
