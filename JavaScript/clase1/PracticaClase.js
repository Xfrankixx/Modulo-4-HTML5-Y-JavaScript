//Practica en clase

const Persona= {

  firstName: 'Frank',
  lastname: 'Guzman',
  age: 19,
  email: 'Franki_23@hotmail.es',
  hobbies: ['Tae-Kwan-Do','Literatura'],
  address: {
    city:'Allende',
    state:'Nuevo Leon'

  },
}



function campos(valor) {
switch(valor){
  case 'firstName':
  console.log(Persona.firstName)
Persona.firstName = prompt("Escribe el nuevo campo")
  break;
  case 'lastname':
  console.log(Persona.lastname)
  Persona.lastname = prompt("Escribe el nuevo campo")
  break;
  case 'age':
  console.log(Persona.age)
  Persona.age = prompt("Escribe el nuevo campo")
  break;
  case 'email':
  console.log(Persona.email)
  Persona.email = prompt("Escribe el nuevo campo")
  break;
  case 'hobbies':
  console.log(Persona.hobbies)
  Persona.hobbies = prompt("Escribe el nuevo campo")
  break;
  case 'address':
Persona.address.city=prompt("Escribe el nuevo campo")
Persona.address.city=prompt("Escribe el nuevo campo")

break;

default:
console.log("Escribe un valor valido")
break;
}
}


list = 'firstName, lastname, age, email, hobbies, address'
pantalla= list.split(' ')
console.log(pantalla)

let desicion='s';

do{
var valor = prompt("Ingresa el campo")
var confirmar = prompt("vas a ingresar a "+valor+" estas seguro? [s/n]")
if(confirmar == 's'){
  campos(valor)
  desicion= 'a'
}
}
while(  desicion == 's'  )



campos(valor)
