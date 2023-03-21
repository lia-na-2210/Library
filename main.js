const addButton = document.getElementById('add-book');
const form = document.querySelector('form');
const myLibrary = [
  {
    title: 'Artemis Fowl',
    author: 'Eoin Colfer',
    pages: '288',
    check: 'Yes',
  },
  {
    title: '1984',
    author: 'George Orwell',
    pages: '206',
    check: 'Yes',
  },
  {
    title: 'Servant of the Bones',
    author: 'Anne Rice',
    pages: '387',
    check: 'No',
  },
  {
    title: 'Harry Potter and the Prisioner of Azkaban',
    author: 'J. K. Rowling',
    pages: '435',
    check: 'No',
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

function Addelement(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const element = Object.fromEntries(fd);
  myLibrary.push(element);
  newCard(element);
  form.reset();
  console.log(myLibrary);
});

function newCard(element) {
  const newTitle = element.title;
  const newAuthor = element.author;
  const newPages = element.pages;
  const newCheck = element.check;
  console.log(newCheck);
  const check = readCheck(newCheck);

  const grid = document.getElementById('grid');
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
  <h3>${newTitle}</h3>
  <h4>${newAuthor}</h4>
  <p>${newPages} pages</p>
  <p>${check}</p>
  `;
  grid.appendChild(div);
}

function createCard() {
  const grid = document.getElementById('grid');
  myLibrary.forEach((element) => {
    const newTitle = element.title;
    const newAuthor = element.author;
    const newPages = element.pages;
    const newCheck = element.check;

    const check = readCheck(newCheck);
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
    <h3>${newTitle}</h3>
    <h4>${newAuthor}</h4>
    <p>${newPages} pages</p>
    <p>${check}</p>
    `;
    grid.appendChild(div);
  });
}

function readCheck(choice) {
  if (choice === 'Yes' || choice === 'yes') {
    return ('I have read this book ✔️');
  }
  return ("I haven't read this yet ❌");
}

window.onload = createCard();
