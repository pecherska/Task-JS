const items = document.querySelectorAll('.item');
// console.log(items);
console.log(`Number of categories: ${items.length}`);

const list = document.querySelectorAll('#categories > li');
console.dir(list);
list.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length} `)
});


