// ABRIR CARTA

const sello = document.getElementById("sello");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");


sello.addEventListener("click",()=>{


    sobre.classList.add("abrir");


    setTimeout(()=>{

        carta.classList.add("mostrar");

    },800);


});




// RESPUESTA SI / NO

window.elegirRespuesta = function(opcion){

const respuesta=document.getElementById("respuesta");

const si=document.getElementById("si");

const no=document.getElementById("no");

si.classList.remove("seleccionado");

no.classList.remove("seleccionado");

if(opcion==="SI"){

respuesta.innerHTML="❤️ Me hiciste muy feliz ❤️";

si.classList.add("seleccionado");

}else{

respuesta.innerHTML="💔 Gracias por responder";

no.classList.add("seleccionado");

}

}
