// Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError,
// а приймала всього один параметр transaction і повертала проміс.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; // не чіпати!

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  const canProcess = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (canProcess) {
        //   onSuccess(transaction.id, delay);
        res(transaction.id, delay);
      } else {
        //   onError(transaction.id);
        rej(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// // /*
// //  * Працює так
// //  */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// /*
//  * Повинно працювати так
//  */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
// π
