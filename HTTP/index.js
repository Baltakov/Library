const fetchBooksBtn = document.querySelector(".fetch");
const booksList = document.querySelector(".book-list");
let isListShown = false;
const BASE_URL = "https://66ed67b5380821644cdcb2d9.mockapi.io";
const addBook = document.querySelector(".add");
const formWrapper = document.querySelector(".formWrapper");

function getBooks() {
  return fetch(`${BASE_URL}/books`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

fetchBooksBtn.addEventListener("click", () => {
  if (!isListShown) {
    getBooks().then((books) => renderBooksList(books));
    isListShown = true;
    fetchBooksBtn.textContent = "Hide books";
  } else {
    booksList.innerHTML = "";
    isListShown = false;
    fetchBooksBtn.textContent = "Show books";
  }
});

function renderBooksList(books) {
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
      renderBooksList(books);
    })
    .catch((error) => console.log(error));
}

addBook.addEventListener("click", () => {
  formWrapper.insertAdjacentHTML("beforeend", createFormMarkup());
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const image = form.elements.image.value;
    const plot = form.elements.plot.value;

    if (title === "" || author === "" || image === "" || plot === "") {
      return console.log("Please fill in all the fields!");
    }

    const newBook = { title, author, image, plot };
    console.log(newBook);

    const options = {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    fetch(`${BASE_URL}/books`, options)
      .then((response) => response.json())
      .then(() => getBooks())
      .then((books) => renderBooksList(books))
      .catch((error) => console.log(error));
  });
});

export function createFormMarkup(
  { title, author, image, plot } = {
    title: "",
    author: "",
    image: "",
    plot: "",
  }
) {
  const form = `<form><label><input value="${title}" type="text" placeholder="Enter title" name="title"></label><label><input value="${author}" type="text" placeholder="Enter author"name="author"></label><label><input value="${image}" type="url" placeholder="Enter image" name="image"></label><label><input value="${plot}" type="text" placeholder="Enter plot"name="plot"></label><button class="save">Save</button></form>`;
  return form;
}
