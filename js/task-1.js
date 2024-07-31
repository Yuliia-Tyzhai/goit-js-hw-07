const categories = document.querySelector('#categories');
const categoriesElements = categories.children.length;
console.log('Number of categories: ' + categoriesElements);
const categoryItem = document.querySelectorAll('li.item');
categoryItem.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elementCount = item.querySelectorAll('ul li').length;
    console.log('Category: ' + categoryName);
    console.log('Elements: ' + elementCount);
});