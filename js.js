// function plus (){
//   let num1, num2, result;
//   num1 =document.getElementById('n1').value;
//   num1 =parseInt(num1);
//   num2 = document.getElementById('n2').value;
// num2= parseInt(num2);
// result = num1 + num2;
// document.getElementById('out').innerHTML = result
// }
// function minus (){
//   let num1, num2, result;
//   num1=document.getElementById('n1').value;
//   num1 = parseInt(num1);
//   num2 = document.getElementById('n2').value;
//   num2 = parseInt(num2);
//   result = num1 - num2;
//   document.getElementById('out').innerHTML = result
// }
// function multiply (){
//   let num1, num2, result;
//    num1= document.getElementById('n1').value;
//    num1 = parseInt(num1);
//    num2 = document.getElementById('n2').value;
//    num2 = parseInt(num2);
//    result = num1 * num2;
//    document.getElementById('out').innerHTML = result
// }
// const div = document.createElement('div')
// div.classList.add('Wrapper')
// console.log(div)
// const body = document.body
// console.log(body)
// body.appendChild(div)
// const header = document.createElement('H1')
// header.textContent = 'Привет'
// console.log(header)
// div.insertAdjacentElement('beforebegin',header)
// const ul = `
// <ul>
// <li>1</li>
// <li>2</li>
// <li>3</li>
// </ul>`
// div.innerHTML = ul;
// const img = document.createElement('img');
// console.log(img)
// img.src = 'https://picsum.photos/220';
// img.width =240
// img.classList.add('super')
// img.alt = 'List'
// div.appendChild(img)
// const elemHTML =`<div class = 'pDiv'>
// <p>Paragraph</p>
// <p>Paragraph2</p>
// </div>`
// const ullist = div.querySelector('ul')
// ullist.insertAdjacentHTML('beforebegin',elemHTML);
// alert (document.body.parentNode === document)
// // document.body.style.background = 'red'; // сделать фон красным
// console.log( document.head.nextSibling)
// console.log( document.body.previousSibling)
// debugger
// let table = document.body.firstElementChild;

// for (let i = table.rows.length - 1; i >= 0; i--) {
//   let row = table.rows[i];

//   for (let j = row.cells.length - 1; j >= 0; j--) {
//     row.cells[j].style.backgroundColor = 'red';
//   }
// }

// setTimeout(() => document.body.style.background = '', 3000); // вернуть назад
function generateCalculateResult() {
  const sizeInput = document.getElementById('tableSize');
  const size = parseInt(sizeInput.value, 10) || 1; // Використовуйте значення, або встановіть 1 як значення за замовчуванням

  const table = document.getElementById('calculateTable');
  table.innerHTML = '';

  for (let i = 1; i <= size; i++) {
    const row = table.insertRow();
    
    for (let j = 1; j <= size; j++) {
      const cell = row.insertCell();
      const input = document.createElement('input');
      input.type = 'text';
      input.value = i * j;
      input.readOnly = true;
      cell.appendChild(input);
    }
  }
}