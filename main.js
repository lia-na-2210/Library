const addButton = document.getElementById('add-book');
const form = document.querySelector('form');

let baseID = 3;

const myLibrary = [
  {
    title: 'Artemis Fowl',
    author: 'Eoin Colfer',
    pages: '288',
    check: 'Yes',
    id: 0,
  },
  {
    title: '1984',
    author: 'George Orwell',
    pages: '206',
    check: 'Yes',
    id: 1,
  },
  {
    title: 'Servant of the Bones',
    author: 'Anne Rice',
    pages: '387',
    check: 'No',
    id: 2,
  },
  {
    title: 'Harry Potter and the Prisioner of Azkaban',
    author: 'J. K. Rowling',
    pages: '435',
    check: 'No',
    id: 3,
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  baseID += 1;
  console.log(baseID);
  const fd = new FormData(form);
  const element = Object.fromEntries(fd);
  element.id = baseID;
  console.log(element);
  myLibrary.push(element);
  newCard(element);
  form.reset();
});

function newCard(element) {
  const book = element;
  const grid = document.getElementById('grid');
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
  <h3>${element.title}</h3>
  <h4>${element.author}</h4>
  <p>${element.pages} pages</p>
  <p>${readCheck(element.check)}</p>
  `;
  grid.appendChild(div);
  const buttons = document.createElement('div');
  buttons.className = 'button-area';
  div.appendChild(buttons);

  const delButton = document.createElement('div');
  delButton.className = 'del-btn';
  delButton.innerHTML = `
  <button id='del-btn' onclick='delCard(${element.id})'>X</button>
  `;
  buttons.appendChild(delButton);

  if (element.check === 'No' || element.check === 'no') {
    const btn = document.createElement('button');
    btn.id = 'read-btn';
    btn.textContent = 'Done!';
    btn.addEventListener('click', () => {
      readChange(book);
    });
    buttons.insertBefore(btn, delButton);
  }
}

function createCard() {
  myLibrary.forEach((element) => {
    newCard(element);
  });
}

function readCheck(choice) {
  if (choice === 'Yes' || choice === 'yes') {
    return ('I have read this book ✔️');
  }
  return ("I haven't read this yet ❌");
}

function readChange(book) {
  book.check = 'yes';
  const grid = document.getElementById('grid');
  grid.innerHTML = ' ';
  createCard();
}

function delCard(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  console.log(index);
  myLibrary.splice(index, 1);
  const grid = document.getElementById('grid');
  grid.innerHTML = ' ';
  console.log(myLibrary);
  createCard();
}

window.onload = createCard();

/* function clones(element) {
  const grid = document.getElementById('grid');
  const newClone = card.cloneNode(true);
  newClone.style.display = 'inline';
  newClone.className = 'card';
  const title = newClone.childNodes[1];
  title.textContent = element.title;
  const author = newClone.childNodes[2];
  author.textContent = element.author;
  const pages = newClone.childNodes[3];
  pages.textContent = element.pages;
  const read = newClone.childNodes[4];
  read.innerHTML = readCheck(element.check);
  grid.appendChild(newClone);
} */
