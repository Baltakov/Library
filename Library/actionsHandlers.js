import { createFormMarkup, createBookMarkup } from "./createMarkupHelpers.js";
import { renderList } from "./index.js";

// deleteBook приймає аргумент event
export function deleteBook(event) {
  // перезаписує масив букс без бука з айді як у ліжкі з кнопкой, на яку клікнули
  const books = JSON.parse(localStorage.getItem("books"));
  const filteredBooks = books.filter(
    (book) => book.id !== event.target.parentNode.id
  );
  localStorage.setItem("books", JSON.stringify(filteredBooks));
  // виклик renderList щоб перезаписати розмітку після видалення бук
  renderList();
  const preview = document.querySelector(".inner-wrapper");
  if (preview) {
    if (preview.dataset.id === event.target.parentNode.id) {
      const rightDiv = document.querySelector(".right");
      rightDiv.innerHTML = "";
    }
  }
  showNotification("Deleted book");
}

export function addBook(event) {
  // console.log(event);
  // console.log(event.target);
  const formMarkup = createFormMarkup();
  // console.log(formMarkup);
  const rightDiv = document.querySelector(".right");
  rightDiv.innerHTML = formMarkup;
  const form = document.querySelector("form");
  // console.log(form);
  // document.querySelector(".save").addEventListener("click", () => {
  // showNotification("Book saved!");
  // });
  form.addEventListener("submit", saveBook);
}

export function editBook(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const book = books.find((book) => book.id === event.target.parentNode.id);
  const markup = createFormMarkup(book);
  const rightDiv = document.querySelector(".right");
  rightDiv.innerHTML = markup;
  const form = document.querySelector("form");
  const index = books.findIndex(
    (book) => book.id === event.target.parentNode.id
  );
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // const form = event.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const img = form.elements.img.value;
    const plot = form.elements.plot.value;

    if (title === "" || author === "" || img === "" || plot === "") {
      return console.log("Please fill in all the fields!");
    }

    const updBook = { id: book.id, title, author, img, plot };
    // console.log(updBook);
    books.splice(index, 1, updBook);

    localStorage.setItem("books", JSON.stringify(books));
    renderList();
    rightDiv.innerHTML = createBookMarkup(updBook);
    showNotification("Book updated");
  });
}
function saveBook(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const img = form.elements.img.value;
  const plot = form.elements.plot.value;

  if (title === "" || author === "" || img === "" || plot === "") {
    return console.log("Please fill in all the fields!");
  }

  const newBook = {
    id: `${Date.now()}`,
    title,
    author,
    img,
    plot,
  };
  // console.log(newBook);

  const books = JSON.parse(localStorage.getItem("books"));
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  renderList();
  const markup = createBookMarkup(newBook);
  const rightDiv = document.querySelector(".right");
  rightDiv.innerHTML = markup;
  showNotification("Book added!");
}

export function showNotification(message) {
  const notification = document.createElement("div");
  // console.log(message);
  notification.classList.add("notification");

  const notificationText = document.createElement("span");
  notificationText.classList.add("notification-text");
  notificationText.textContent = message;

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-notification");

  setTimeout(() => {
    notification.classList.add("hidden");
    setTimeout(() => {
      notification.remove();
    }, 2000);
  }, 500);

  closeButton.addEventListener("click", () => {
    notification.remove();
  });
  notification.append(notificationText, closeButton);
  const rightDiv = document.querySelector(".right");
  rightDiv.before(notification);
}
