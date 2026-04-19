document.addEventListener("DOMContentLoaded", () => {
  const book = document.getElementById("book");
  const menu = document.getElementById("bookMenu");

  if (!book || !menu) {
    console.log("Book or menu not found");
    return;
  }

  book.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});