function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms) {
      setTimeout(() => resolve(`the delay was ${ms}`), ms);
    } else {
      reject(`error no delay`);
    }
  });
}

delay(500)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
