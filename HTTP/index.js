const showButton = document.querySelector(".show");
const list = document.querySelector(".list");

function getBooks() {
  const URL = "https://66ed67b5380821644cdcb2d9.mockapi.io/books";
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

showButton.addEventListener("click", () => {
  getBooks().then((books) => console.log(books));
});
