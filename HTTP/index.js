const fetchBooksBtn = document.querySelector("button");
const booksList = document.querySelector(".book-list");
let isListShown = false;
const BASE_URL = "https://66ed67b5380821644cdcb2d9.mockapi.io";

function getBooks() {
  return fetch(`${BASE_URL}/books`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

fetchBooksBtn.addEventListener("click", () => {
  if (!isListShown) {
    getBooks().then((books) => renderBookList(books));
    isListShown = true;
    fetchBooksBtn.textContent = "Hi";
  }
});

function renderBookList(books) {
  const markup = books
    .map(({ id, title }) => {
      return `<li id=${id}>
    <p>Title: ${title}</p><button class='deleteBook'>Delete</button>
    </li>`;
    })
    .join("");
  booksList.innerHTML = "";
  booksList.insertAdjacentHTML("beforeend", markup);
}

booksList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBook")) {
    deleteBook(event);
  }
});

function deleteBook(event) {
  const bookId = event.target.parentNode.id;
  const options = { method: "DELETE" };
  fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(() => {
      return getBooks();
    })
    .then((books) => {
      renderBookList(books);
    })
    .catch((error) => console.log(error));
}
