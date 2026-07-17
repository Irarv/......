import { initializeApp } from "firebase/app";

import { getDatabase, ref, push, set } from "firebase/database";



const firebaseConfig = {

apiKey: "AIzaSyBSou2aj8tlRMe0MlPuP87YgK0R0XW7R-A",

authDomain: "carta-amor-d1cff.firebaseapp.com",

projectId: "carta-amor-d1cff",

storageBucket: "carta-amor-d1cff.firebasestorage.app",

messagingSenderId: "852809289289",

appId: "1:852809289289:web:47601f5db9e2d900d97998",

measurementId: "G-JCDCZHZQ81"

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