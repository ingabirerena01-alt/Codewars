async function Rena() {
  let vae = false;
  if (vae) {
    return Promise.resolve("I love you was written in Red");
  }
  return Promise.reject("you have rejected his love");
}

Rena()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
