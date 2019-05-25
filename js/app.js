var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");

btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
})

 var imagenes= new Array(

'imagenes/Alex.jpg',
'imagenes/Dayo.jpg',
'imagenes/Felipez.jpg',
'imagenes/Lanovia.jpg'

);

function rotarImagenes()

{
    var index=Math.floor((Math.random()*imagenes.length));
document.getElementById("ImagenesMemeverso").src=imagenes[index];

switch (index) {
  case 0:
document.getElementById('titulo').innerHTML = "      Felipez360     ";
  document.getElementById('Texto').innerHTML = " Felipez360 (SoyFelipez360 o Felipez) es un youtuber español que subía vídeos a su canal de YouTube sobre videojuegos, opiniones, metacríticas de la propia plataforma o parodias, siempre desde un lado humorístico y cómico. Actualmente se le identifica más por crear contenido de los juegos League of Legends y Hearthstone .     "   ;

    break;
    case 1:

document.getElementById('titulo').innerHTML = "      DayoScript    ";
    document.getElementById('Texto').innerHTML = "     José Altozano, mejor conocido como DayoScript es un periodista de videojuegos, redactor en Mundogamers y en Eurogamer. Crítico de cualquier proyecto audiovisual, videojuegos o anime. Tiene un estilo de canal profesional, que se puede notar en cada uno de sus vídeos.    Le gusta mucho la disonancia ludonarrativa. ";

      break;
      case 2:

document.getElementById('titulo').innerHTML = "      Alexelcapo     ";
      document.getElementById('Texto').innerHTML = " Alexelcapo (Alex, Alejandro, EvilAFM) es un youtuber de Mallorca que sube vídeos relacionados con el mundo de los videojuegos, realizando gameplays comentados de los mismos. Cuenta actualmente con 1.400.000 suscriptores en su canal de YouTube y con más de 4.500 vídeos.   ";

        break;

        case 3:

document.getElementById('titulo').innerHTML = "      La novia de AlexelCapo       ";
        document.getElementById('Texto').innerHTML = "      La novia de AlexelCapo    ";
          break;
  default:
}

}
onload=function()

{
    rotarImagenes();
    setInterval(rotarImagenes,6000);
}
//para que te diga si te descoenctaste de internet
window.addEventListener('load', function() {
  var status = document.getElementById("status");
  var log = document.getElementById("log");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

function datos()
	    {
	        alert("Alumno: Frank Guzman"+"\nMatricula:8073872"+"\nCorreo:Franki_23@hotmail.es"+"\n"+resultado);
	    }


      var linea= "Demostracion de ";
      var linea2= "Concatenacion ";

      var resultado= linea.concat(linea2, "Gracias por ver jaja salu2");


var j=0;
      for(var i=0;i>10,000;i++){
        j++;
document.getElementById("aumento").innerHTML = j;

      }
