const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(2), 500),
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1500));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(`Error: ${error}`); // Error: 2
  });
