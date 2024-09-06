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
