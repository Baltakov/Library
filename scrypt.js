const first = document.querySelector(".temp1");
const second = document.querySelector(".temp2");
const third = document.querySelector(".temp3");

first.addEventListener("click", (event) => {
  //   console.log("First");
  //   console.log(event.target);
  if (event.target.classList.contains("temp1")) {
    console.log("Green");
  } else if (event.target.classList.contains("temp2")) {
    console.log("Yellow");
  } else if (event.target.classList.contains("temp3")) {
    console.log("Red");
  }
});

// second.addEventListener("click", () => {
//   console.log("Second");
// });
// third.addEventListener("click", () => {
//   console.log("Third");
// });

console.log(localStorage);
console.log(window.localStorage);
localStorage.setItem("ui-theme", "light");
console.log(localStorage); // Storage {ui-theme: "light", length: 1}
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
console.log(window.sessionStorage); // Storage {length: 0}

// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
