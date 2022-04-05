
let domSelector = document.querySelector('#dom-selector');
let newDiv = document.createElement('div');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let h1 = document.createElement('h1');
let h3 = document.createElement('h3');
let div = document.createElement('div');

p1.textContent = 'This is paragraph text #1.';
p1.setAttribute('style', 'color: red;');

p2.textContent = 'This is paragraph text #2.';

h1.textContent = 'This is a header 1.';

h3.textContent = 'This is a header 3.';
h3.setAttribute('style', 'color: blue;')

div.appendChild(p1);
div.appendChild(h1);
div.setAttribute('style', 'border: 2px solid black; background-color: pink;')

newDiv.classList.add('dom-content')
newDiv.appendChild(p2);
newDiv.appendChild(h3);
newDiv.appendChild(div);

domSelector.appendChild(newDiv);
