let info = {
  name: 'Frank',
  city: 'Mty' ,
  school: 'UANL'
}


let concat;

concat = "hola"+info.name

let html;


html =
'<ul>
<li>Name: ${info.name}</li>
<li>city: ${info.city}</li>
<li>school: ${info.school}</li>
</ul>

'
console.log(html)
document.body.innerHTML = html
