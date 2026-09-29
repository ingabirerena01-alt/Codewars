function createAlarm(name, time) {
  return new Promise((resolve, reject) => {
    if (time < 2) {
      reject("Delay is not sufficient");
    } else {
      resolve(`Wake up ${name}`);
    }
  });
}

createAlarm("John", 1)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
