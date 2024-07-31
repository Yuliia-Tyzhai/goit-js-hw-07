
const btnChangeColorEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');
const bodyEl = document.body;
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
btnChangeColorEl.addEventListener('click', () => { 
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorSpanEl.textContent = newColor;
});