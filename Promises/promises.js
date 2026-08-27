let promise = new Promise((resolve, reject) => {
  var success = true;
  setTimeout(() => {
    if (success) {
      resolve("Promise is resolved");
    } else {
      reject(new Error("Promise is rejected"));
    }
  }, 1000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise is settled (either resolved or rejected)");
  });
