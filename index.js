let books = [
  {
    id: "1",
    title: `Apple. Computer evolution`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Richly illustrated chronological guide to the history of computers in which
       and structured information about the creation and development of Apple technology against the backdrop of history
       personal computers in general.
       The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
       accompanied by a large number of original studio photographs.
       The book is intended for a wide range of readers interested in the history of electronics.
       It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
  },
  {
    id: "2",
    title: `How to explain computer science to a child`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
       in informatics. Explains step by step how children can get the most out of computers and internet services,
       staying safe.
       The book covers everything from data storage to life on the Internet,
       from programming to computer attacks. About how computers function, about modern software
       software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
       explained clearly with illustrations and diagrams.`,
  },
  {
    id: "3",
    title: `The path of the Scrum Master. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
       It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
       knowledge throughout your career.
       Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
       how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
       What tools does he need to use?`,
  },
];
//отримаємо посилання на елемент з классом рут
const root = document.querySelector(".root");
console.log(root);
// створюємо два тегі дів
const leftDiv = document.createElement("div");
const rightDiv = document.createElement("div");
console.log(leftDiv);
// додаємо створеним тегам класи
leftDiv.classList.add("left");
rightDiv.classList.add("right");
console.log(leftDiv);
// ???????додаємо створені діви в ДОМ-дерево. В html ми з початку ствоювали контент, а потім додавли до нього класи((
root.append(leftDiv, rightDiv);
console.log(root.innerHTML);
// створюємо тег аш1
const title = document.createElement("h1");
console.log(title); // ???????????Screenshot_15
// присвоюємо заголовку аш1 значення текст
title.textContent = "Library";
console.log(title.textContent);
// створюємо тег ул
const list = document.createElement("ul");
console.log(list);
// створюємо тег баттон
const addButton = document.createElement("button");
console.log(addButton);
// кнопці присвоюємо значення текст
addButton.textContent = "addBook";
console.log(addButton.textContent);
// додаємо кнопці клас ад
addButton.classList.add("add");
console.log(addButton);
// додаємо створені аш1, улку та кнопку адблок в ДОМ-дерево
leftDiv.append(title, list, addButton);
// створюємо функцію renderList, яка за допомогою метода меп перебирає масив букс і повертає ліжку з айді, заголовок з назвою та кнопку Делейт. Формує HTML-размітку з айді, назвою та кнопкою.
const renderList = () => {
  const markup = books
    .map(
      (book) => `<li id="${book.id}">
  <p class="title">${book.title}</p><button class="delete">Delete</button></li>`
    )
    .join("");
  // перед вставкою нового контента очищуємо в улкі старий
  console.log(list.innerHTML);
  list.innerHTML = "";
  console.log(list.innerHTML);
  // вставляємо нову розмітку на початку улкі
  list.insertAdjacentHTML("afterbegin", markup);
  console.log(list.innerHTML);

  // отримаємо посилання на всі елементи з класом delete
  const deleteButtons = document.querySelectorAll(".delete");
  console.log(deleteButtons);
  // перебираємо масив кнопок та надаємо обробника подій кожної
  deleteButtons.forEach((button, index) => {
    console.log(index + 1); // немає у консолі ????
    button.addEventListener("click", deleteBook);
    console.log(deleteButtons); // немає у консолі ????
  });
  console.log(deleteButtons); //?? пустий
  // отримаємо посилання на всі елементи з класом title
  const titles = document.querySelectorAll(".title");
  console.log(titles); // пустий і начебто ничім не відрізняється від 100
  titles.forEach((title) => title.addEventListener("click", renderPreview));
};
renderList();
// deleteBook приймає аргумент event
function deleteBook(event) {
  // перезаписує масив букс без бука з айді як у ліжкі з кнопкой, на яку клікнули
  books = books.filter((book) => book.id !== event.target.parentNode.id);
  // виклик renderList щоб перезаписати розмітку після видалення бук
  renderList();
}
function createBookMarkup({ id, title, author, plot, img }) {
  const markup = `<div data-id=${id}><h2>${title}</h2><p>${author}</p><img src='${img}' alt='${title}'><p>${plot}</p></div>`;
  return markup;
}
// // // function createBookMarkup(book) {
// // //   const markup = `<div data-id=${this.id}><h2>${this.title}</h2><p>${this.author}</p><img src='${this.img}' alt='${this.title}'><p>${this.plot}</p></div>`;
// // //   return markup;
// // // }

addButton.addEventListener("click", addBook);

function addBook(event) {
  console.log(event);
  console.log(event.target);
  // ??? чому
  const formMarkup = createFormMarkup();
  rightDiv.innerHTML = formMarkup;
  const form = document.querySelector("form");
  form.addEventListener("submit", saveBook);
}

function saveBook(event) {
  event.preventDefault();
  console.log(event);
}

function renderPreview(event) {
  const p = event.target;
  // console.log(p.parentNode.id);
  // console.log(p);
  console.log(p.textContent);
  const item = books.find((book) => book.title === p.textContent);
  console.log(item);
  const markup = createBookMarkup(item);
  console.log(markup);
  rightDiv.innerHTML = markup;
}

function createFormMarkup() {
  // ??? form, label, <input></input> ... та підписи
  const form = `<form><label>Title<input type="text" name="title"></label><label>Author<input type="text" name="author"></label><label>Image<input type="url" name="img"></label><label>Plot<input type="text" name="plot"></label><button>Save</button></form>`;
  return form;
}
