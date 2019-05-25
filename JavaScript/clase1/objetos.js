const person= {//creamos el objeto

  firstName: 'Frank',
  lastname: 'Guzman',
  age: 19,
  email: 'Franki_23@hotmail.es',
  hobbies: ['music','sport'],
  address: {
    city:'Allende',
    state:'Nuevo Leon'
  },
}

let val;

val=person

val=person['firstName '] //obtenemos nadamas el firstName del objeto

val=person.firstName //manera mas eficiente de obtener el firstName del objeto

console.log(val)

let first_name;
let FirstName;
let firstName;
//maneras de inicializar variables


const id=22;

if(id >22 && id<15){//dos condiciones con || y si no se cumplen ambas no pasa
  console.log('correct')
}else{
  console.log('Error')
}

console.log(id==2 ? 'correct ' : 'Incorrect')  //if mas corto, operacion ternarria

if (true)//otra manera de if
  console.log(true)
else
  console,log(false)

//for
for(var i=0;i<5;i++){
  console.log(i)
  if(i==0){
    console.log('igual a 0')
    continue;    //continua dentro del for cuando i es igual a 0
  }
  if(i== 2){
    break;      //se sale del for en cuanto encuentra el 2
  }
}

while(i<10){ //while
  console.log('number'+i)
  i++;
}


do{console.log('number'+i)// dowhile
i++
}while(i<20);


function saludo(firstName='Frank',lastname='Guzman'){// se crea otrsa function
  return 'hello'+' '+firstName+' '+lastname;
}


console.log(saludo())



const square =  function (x=3){  //se iguala una variable a una funcion
  return x*x;
}
console.log(square())



const todo= {
  add: function(){
    console.log('agregado')
    return 0
  },
     edit:function (){
  console.log('editado');
}
}
todo.delete =function(){
  cosole. log('delete')
}

console.log(todo.add())

let val;

val= window.outerHeight;   //parte externa de la ventana en altura
//val= window.outerwidht;   ancho


val= window.innerHeight; // ;a a;tira de lo que se esta viendo

val= window.scrollY;

val=window.location      //pagina en la que estoy trabajando

val= window.location.hostname

val- window.location.port

window.history.go(-2) //regresar 3 paginas hacia atras

val=window.history.length    //saber cuanto ha avanzado

console.log(val);
