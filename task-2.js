function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    const results = [];
    let completedCount = 0;
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((error) => {
          results[index] = { status: "rejected", reason: error };
        })
        .finally(() => {
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3),
];

promiseAllSettled(promises).then((results) => {
  console.log("All promises settled:", results);
});
