const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success with Async/Await!");
  } else {
    reject("Failure with Async/Await!");
  }
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();