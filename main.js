const input = document.getElementById('title-inp');

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const text = document.createElement('input');
    document.body.appendChild(text);
  }
});
