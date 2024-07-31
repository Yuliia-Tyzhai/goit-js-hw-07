
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  

  const indices = Array.from({ length: amount }, (_, i) => i);

  boxesContainer.innerHTML = '';

 
  const boxes = indices.map(i => {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });


  boxesContainer.append(...boxes);
}


function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}


const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls input');


createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = ''; 
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});