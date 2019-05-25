const Num1 = document.getElementById('firstNumber')

const Num2 = document.getElementById('secondNumber')

const Resp = document.getElementById('response')

const Operador= document.getElementById('operador')


setInterval(function(){

 Num2.children[0].children[0].innerText=  Math.floor(Math.random()*100);

  Num1.children[0].children[0].innerText=  Math.floor(Math.random()*100);

let x= Num2.children[0].children[0].innerText;

let y=Num1.children[0].children[0].innerText;


  var lista = ["+","-","*","/"];

let val = lista [Math.floor(Math.random() *lista.length)]

switch(val){

  case "+":
  document.getElementsByClassName('col text-center')[0].firstElementChild.innerHTML = '+';
  document.getElementsByClassName('col text-center').innerHTML  = '+';
Respuesta= Number(y) + Number(x);
  Resp.children[0].children[0].innerText = Respuesta;

  break;


case "-":
  document.getElementsByClassName('col text-center')[0].firstElementChild.innerHTML = '-';
Respuesta= Number(y) - Number(x);
  Resp.children[0].children[0].innerText = Respuesta;

break;

case "/":
  document.getElementsByClassName('col text-center')[0].firstElementChild.innerHTML = '/';
Respuesta = Number(y) / Number(x);
  Resp.children[0].children[0].innerText = Respuesta;

break;

case "*":
  document.getElementsByClassName('col text-center')[0].firstElementChild.innerHTML = '*';
Respuesta= Number(y) * Number(x);
  Resp.children[0].children[0].innerText = Respuesta;

break;

default:
break;
}
}, 2000)


   //children: (html collection) tomo todo lo de adentro del div, para el p
