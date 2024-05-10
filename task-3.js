function chainPromises(promises) {
  return promises.reduce((chain, asyncFunction) => {
    return chain.then((result) => asyncFunction(result));
  }, Promise.resolve());
}

function asyncFunction1() {
  return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
  .then((result) => {
    console.log("Chained promise result:", result);
  })
  .catch((error) => {
    console.error("Chained promise error:", error);
  });
