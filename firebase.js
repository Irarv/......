import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



document.getElementById("guardar").addEventListener("click", ()=>{


    let comentario = document.getElementById("comentario").value;


    const nuevo = push(ref(db,"comentarios"));


    set(nuevo,{
        texto: comentario,
        fecha: new Date().toISOString()
    })
    .then(()=>{
        console.log("Guardado correctamente");
    })
    .catch((error)=>{
        console.log("ERROR:",error);
    });


});

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
