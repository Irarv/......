import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getDatabase,
ref,
push,
set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {

apiKey: "AIzaSyBSou2aj8tlRMe0MlPuP87YgK0R0XW7R-A",

authDomain: "carta-amor-d1cff.firebaseapp.com",

databaseURL: "https://carta-amor-d1cff-default-rtdb.firebaseio.com",

projectId: "carta-amor-d1cff",

storageBucket: "carta-amor-d1cff.firebasestorage.app",

messagingSenderId: "852809289289",

appId: "1:852809289289:web:47601f5db9e2d900d97998",

measurementId: "G-JCDCZHZQ81"

};


const app = initializeApp(firebaseConfig);


const db = getDatabase(app);



window.guardarRespuesta = async function(respuesta){


try{


const referencia = push(ref(db,"respuestas"));


await set(referencia,{

respuesta:respuesta,

fecha:new Date().toLocaleString()

});


console.log("Respuesta guardada");


}catch(error){

console.error(error);

}


}




window.guardarComentario = async function(){


let texto=document.getElementById("comentario").value;


if(texto.trim()==""){

alert("Escribe un mensaje ❤️");

return;

}



try{


const referencia=push(ref(db,"comentarios"));


await set(referencia,{

mensaje:texto,

fecha:new Date().toLocaleString()

});



document.getElementById("comentario").value="";


alert("Mensaje guardado 💌");


console.log("Comentario guardado");


}catch(error){


console.error(error);


}


}
