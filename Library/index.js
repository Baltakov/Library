import books from "./books.js";
import { createBookMarkup } from "./createMarkupHelpers.js";
import { deleteBook, addBook, editBook } from "./actionsHandlers.js";

const localStorageBooks = localStorage.getItem("books");
if (!localStorageBooks) {
  localStorage.setItem("books", JSON.stringify(books));
}

//отримаємо посилання на елемент з классом рут
const root = document.querySelector(".root");
// console.log(root);
// створюємо два тегі дів
const leftDiv = document.createElement("div");
const rightDiv = document.createElement("div");
// console.log(leftDiv);
// додаємо створеним тегам класи
leftDiv.classList.add("left");
rightDiv.classList.add("right");
// console.log(leftDiv);
// ???????додаємо створені діви в ДОМ-дерево. В html ми з початку ствоювали контент, а потім додавли до нього класи((
root.append(leftDiv, rightDiv);
// console.log(root.innerHTML);
// створюємо тег аш1
const title = document.createElement("h1");
// console.log(title); // ???????????Screenshot_15
// присвоюємо заголовку аш1 значення текст
title.textContent = "Library";
// console.log(title.textContent);
// створюємо тег ул
const list = document.createElement("ul");
// console.log(list);
// створюємо тег баттон
const addButton = document.createElement("button");
// console.log(addButton);
// кнопці присвоюємо значення текст
addButton.textContent = "Add book";
// console.log(addButton.textContent);
// додаємо кнопці клас ад
addButton.classList.add("add");
// console.log(addButton);
// додаємо створені аш1, улку та кнопку адблок в ДОМ-дерево
leftDiv.append(title, list, addButton);

// створюємо функцію renderList, яка за допомогою метода меп перебирає масив букс і повертає ліжку з айді, заголовок з назвою та кнопку Делейт. Формує HTML-размітку з айді, назвою та кнопкою.
export const renderList = () => {
  const books = JSON.parse(localStorage.getItem("books"));
  const markup = books
    .map(
      (book) => `<li id="${book.id}" class="bookItem">
  <p class="title">${book.title}</p><button class="delete">Delete</button><button class="edit">Edit</button></li>`
    )
    .join("");
  // перед вставкою нового контента очищуємо в улкі старий
  // console.log(list.innerHTML);
  list.innerHTML = "";
  // console.log(list.innerHTML);
  // вставляємо нову розмітку на початку улкі
  list.insertAdjacentHTML("afterbegin", markup);
  // console.log(list.innerHTML);
  const items = document.querySelectorAll(".bookItem");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.classList.contains("title")) {
        renderPreview(event);
      }
      if (event.target.classList.contains("delete")) {
        deleteBook(event);
      }
      if (event.target.classList.contains("edit")) {
        editBook(event);
      }
    });
  });

  // отримаємо посилання на всі елементи з класом delete
  // const deleteButtons = document.querySelectorAll(".delete");
  // const editButtons = document.querySelectorAll(".edit");

  // editButtons.forEach((button) => {
  //   button.addEventListener("click", editBook);
  // });
  // // console.log(deleteButtons);

  // // перебираємо масив кнопок та надаємо обробника подій кожної
  // deleteButtons.forEach((button) => {
  //   // console.log(index + 1); // немає у консолі ????
  //   button.addEventListener("click", deleteBook);
  //   // console.log(deleteButtons); // немає у консолі ????
  // });
  // console.log(deleteButtons); //?? пустий

  // отримаємо посилання на всі елементи з класом title
  // const titles = document.querySelectorAll(".title");
  // // console.log(titles); // пустий і начебто ничім не відрізняється від 100
  // titles.forEach((title) => title.addEventListener("click", renderPreview));
};

renderList();

addButton.addEventListener("click", addBook);

function renderPreview(event) {
  const p = event.target;
  const books = JSON.parse(localStorage.getItem("books"));
  const item = books.find((book) => book.title === p.textContent);
  const markup = createBookMarkup(item);
  rightDiv.innerHTML = markup;
}
