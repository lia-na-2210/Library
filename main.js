const addButton = document.getElementById('add-book');
const form = document.querySelector('form');
const myLibrary = [
  {
    title: 'Artemis Fowl',
    author: 'Eoin Colfer',
    pages: '288',
    checl: 'Yes',
  },
  {
    title: '1984',
    author: 'George Orwell',
    pages: '206',
    checl: 'Yes',
  },
  {
    title: 'Servant of the Bones',
    author: 'Anne Rice',
    pages: '387',
    checl: 'No',
  },
  {
    title: 'Harry Potter and the Prisioner of Azkaban',
    author: 'J. K. Rowling',
    pages: '435',
    checl: 'No',
  },
];

addButton.addEventListener('click', () => {
  const formArea = document.getElementById('form-area');
  if (formArea.style.display === 'none' || formArea.style.display === null) {
    formArea.style.display = 'block';
  } else {
    formArea.style.display = 'none';
  }
});

/* function AddBook(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
} */

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const book = Object.fromEntries(fd);
  myLibrary.push(book);
  form.reset();
  console.log(myLibrary);
});
