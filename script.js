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

window.guardarComentario = async function(){

    const texto = document.getElementById("comentario").value;

    if(texto.trim()==""){
        alert("Escribe un mensaje ❤️");
        return;
    }

    try{

        const referencia = push(ref(db,"comentarios"));

        await set(referencia,{
            mensaje:texto,
            fecha:new Date().toLocaleString()
        });

        document.getElementById("comentario").value="";

        alert("Mensaje guardado 💌");

    }catch(error){

        console.error(error);
        alert(error.message);


}
