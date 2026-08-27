const user = Promise.resolve("User loaded");
const orders = Promise.reject("Orders failed");
const notifications = Promise.resolve("Notifications loaded");

Promise.all([user, orders, notifications])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

Promise.allSettled([user, orders, notifications]).then((results) => {
  console.log("All settled:", results);
});
