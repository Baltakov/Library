export function createBookMarkup({ id, title, author, plot, img }) {
  const markup = `<div data-id=${id} class="inner-wrapper"><h2>${title}</h2><p>${author}</p><img src='${img}' alt='${title}'><p>${plot}</p></div>`;
  return markup;
}

export function createFormMarkup(
  { title, author, img, plot } = {
    title: "",
    author: "",
    img: "",
    plot: "",
  }
) {
  const form = `<form><label><input value="${title}" type="text" placeholder="Enter title" name="title"></label><label><input value="${author}" type="text" placeholder="Enter author"name="author"></label><label><input value="${img}" type="url" placeholder="Enter image" name="img"></label><label><input value="${plot}" type="text" placeholder="Enter plot"name="plot"></label><button class="save">Save</button></form>`;
  return form;
}
