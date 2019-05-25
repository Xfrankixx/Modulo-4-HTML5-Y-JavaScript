let val;

const lista = document.querySelector('ul')
setInterval(function(){
  let ranNumb = Math.floor(Math.random()*5+1)

  lista.firstElementChild.innerHTML = `${ranNumb} random`
}, 2000)

// const item = document.querySelector('li')
//
// val = lista.childNodes[1].nodeType
//
//  // 1 - Element
//  // 2 - Attribute---------
//  // 3 - Text node
//  // 4 - Comentario
//  // 5 - Document
//  // 6 - Doctype
//
// val = lista.children[0].innerText = 'CAMBIO'
//
// val = lista.lastElementChild
// val = lista.childElementCount
//
// val = item.parentNode.parentNode
//
// val = item.previousElementSibling;
// val.style.color = 'red'









// val = document.querySelectorAll('.list-group-item')

// let liImpar = document.querySelectorAll('li:nth-child(odd)')
// let liPar = document.querySelectorAll('li:nth-child(even)')
//
// liPar.forEach(function(li) {
//   li.innerText = 'Par'
// })
// liImpar.forEach(function(li) {
//   li.style.background = 'gray'
// })

// let test = 'Omar'
// val.forEach(function(x){
//   x.innerHTML = `Name: ${test}`
// })
// val = document.getElementsByClassName('list-group-item')
//
//
// val[3].style.color = 'green'
// val = Array.from(val)
// for (var i = 0; i < val.length; i++) {
//   val[i]
// }


// document.querySelector('li').style.color = 'red'
// document.querySelector('ul li').style.color = 'blue'
//
// document.querySelector('li:last-child').style.background = 'gray'
// document.querySelector('li:nth-child(2)').style.background = 'gray'
// document.querySelector('li:nth-child(odd)').style.background = 'yellow'
// document.querySelector('li:nth-child(even)').style.background = 'gray'



// val = document.querySelector('h5')

// val = document.getElementById('task-title')
//
// val.style.color = "red"
// val.style.background = 'gray'
// // val.style.display = 'none'
//
// val.textContent = 'Mis listas'
// val.innerText = 'Uno listas'
// val.innerHTML = '<span style="font-size:10px;">Texto</span>'
// val = document;
// val = document.all[5];
// val = document.all.length;
// val = document.body;
// val = document.forms;
//
// val = document.links[2];

console.log(val)
