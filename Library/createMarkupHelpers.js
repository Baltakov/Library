export function createFormMarkup(
  { title, author, img, plot } = {
    title: "",
    author: "",
    img: "",
    plot: "",
  }
) {
  // ??? form, label, <input></input> ... та підписи
  const form = `<form><label>Title<input value="${title}" type="text" name="title"></label><label>Author<input value="${author}" type="text" name="author"></label><label>Image<input value="${img}" type="url" name="img"></label><label>Plot<input value="${plot}" type="text" name="plot"></label><button>Save</button></form>`;
  return form;
}

export function createBookMarkup({ id, title, author, plot, img }) {
  const markup = `<div data-id=${id} class="inner-wrapper"><h2>${title}</h2><p>${author}</p><img src='${img}' alt='${title}'><p>${plot}</p></div>`;
  return markup;
}
