let val;

let test = ['44','Frank',22,false,null, new Date(),{city: 'Miani'}]//arreglo con todo tipo de variables

test= new Array(22.33,55,66,77)//otra manera de crear un arreglo

val= test.length//para obtener la longitud de tu arreglo

val=Array.isArray(test)//se valida si es un arreglo o

val=test[2]//se agarra el indice 2 del arreglo

val= test.indexof(66)//indentifica que indice es el valor dentro del arreglo

let test2={1,2,3,4,5}

val=test.concat(test2)//concateno test 2 a vale

test.push(88)//agrega el valor entre parentesis al final del arreglo

test.unshift(11)//agrega el 11 al inicio del arreglo

test.shift(88)//quita el primer 88 del arreglo

test.pop(88)//quita el 88 desde el final hasta el inicio

test.reverse();//lee el arreglo de atras hacia adelante

let names= ['Ana','Omar', 'Frank']

val= names

val= names.sort()//acomoda alfabeticamente

val=test.sort(function(x,y){ return x-y})//acomoda los valores de menor a mayor se cambia a y-x para acomodar de mayor a menor

function over50(x){
return x>50;
}//function para decidir que buscar

test.find(x)//encontrara dentro de el arreglo el primer numero mayor a 50

console.log(val);//es para imprimir
