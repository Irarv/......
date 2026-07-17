import { initializeApp } from "firebase/app";

import { getDatabase, ref, push, set } from "firebase/database";



const firebaseConfig = {

apiKey:"...",

authDomain:"...",

databaseURL:"https://carta-amor-d1cff-default-rtdb.firebaseio.com",

projectId:"carta-amor-d1cff",

storageBucket:"carta-amor-d1cff.firebasestorage.app",

messagingSenderId:"852809289289",

appId:"...",

measurementId:"..."

};



const app = initializeApp(firebaseConfig);


const db = getDatabase(app);





window.guardarRespuesta = function(respuesta){


const referencia = push(ref(db,"respuestas"));


set(referencia,{

respuesta:respuesta,

fecha:new Date().toLocaleString()

});


}





window.guardarComentario = function(){



let texto = document.getElementById("comentario").value;



if(texto.trim()==""){

alert("Escribe un mensaje ❤️");

return;

}



const referencia = push(ref(db,"comentarios"));



set(referencia,{

mensaje:texto,

fecha:new Date().toLocaleString()

});



document.getElementById("comentario").value="";

alert("Mensaje guardado 💌");


}
