// const first = document.querySelector(".temp1");
// const second = document.querySelector(".temp2");
// const third = document.querySelector(".temp3");

// first.addEventListener("click", (event) => {
//   //   console.log("First");
//   //   console.log(event.target);
//   if (event.target.classList.contains("temp1")) {
//     console.log("Green");
//   } else if (event.target.classList.contains("temp2")) {
//     console.log("Yellow");
//   } else if (event.target.classList.contains("temp3")) {
//     console.log("Red");
//   }
// });

// // second.addEventListener("click", () => {
// //   console.log("Second");
// // });
// // third.addEventListener("click", () => {
// //   console.log("Third");
// // });

// console.log(localStorage);
// console.log(window.localStorage);
// localStorage.setItem("ui-theme", "light");
// console.log(localStorage); // Storage {ui-theme: "light", length: 1}
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));
// console.log(window.sessionStorage); // Storage {length: 0}

// // const form = document.querySelector(".feedback-form");

// // form.addEventListener("submit", (evt) => {
// //   evt.preventDefault();
// //   console.log(evt.target.elements.message.value);
// //   form.reset();
// // });

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);
// console.log(1);
// const add = (a, b) => console.log(a + b, Math.random());
// const temp = setInterval(add, 1000, 100, 200);
// setTimeout(() => clearInterval(temp), 10000);
// console.log(2);

// Change value of isSuccess variable to call resolve or reject

// const isSuccess = Math.random();

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (isSuccess > 0.5) {
//       res("Success! Value passed to resolve function");
//     } else {
//       rej("Error! Error passed to reject function");
//     }
//   }, 1000);
// });
// console.log(promise);
// setTimeout(() => console.log(promise), 5000);

// promise.then((data) => console.log(data)).catch((data) => console.log(data));

// promise.then(
//   (res) => console.log(res),
//   (error) => console.log(error)
// );

// promise
//   .then((res) => {
//     console.log(res);
//     return res;
//   })
//   .then((error) => {
//     console.log(error);
//   });

// // Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд.
// //  Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };
// console.log(delay(1000));
// delay(1000).then((data) => {
//   console.log(data);
// });

// const logger = (time) => console.log(`Resolved after ${time}ms`);

// Виклик функції для перевір

// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала
// всього два параметри allUsers і userName і повертала проміс.

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Зараз працює так
//  */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  return new Promise((resolve) => {
    resolve(updatedUsers);
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then((data) => logger(data));
toggleUserState(users, "Lux").then(logger);
