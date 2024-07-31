const fieldEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const onFieldInput = () => {
    const name = fieldEl.value.trim();  
    const displayName = name === '' ? 'Anonymous' : name;
    spanEl.textContent = displayName;
    console.log(displayName);
 };
fieldEl.addEventListener('input', onFieldInput);