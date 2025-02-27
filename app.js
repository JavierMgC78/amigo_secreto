const nombres = []; // Array para almacenar los nombres
const lista1 =[];
const lista2 =[];
var listaAmigos = [];













function agregarAmigo(nombre) {


  // Validamos si el nombre contiene una coma
  if (nombre.includes(",")) {
    const listaNombres = nombre.split(",").map(nombre => nombre.trim());

    listaNombres.forEach(element => {
      // verificar si el nombre esta vacío
        if(element === ""){
            alert("sin nombre  vacio");
        }else{
            listaAmigos.push(element);
        }
    });
    //listaAmigos.push(nombre);
    console.log(listaAmigos);
  } else {
    if(nombre == ""){
        alert("campo vacio");
    }else{
        listaAmigos.push(nombre);
    }
        console.log(listaAmigos);
  }


  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML= "";
  nombres.forEach(e=>{
    const li = document.createElement("li");
    li.textContent = e;
    listaAmigos.appendChild(li);
    
  });
}


function aleatorio(min, max){
let num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);
return num;
}

function sortearAmigo(){

  while(nombres.length >2){

  nombres.splice(nombres.length, 1)

  //Seleccionar una persona
  let persona = aleatorio(1,nombres.length);
  lista1.push(nombres[persona]);
  console.log("persona: " + lista1[persona]);

  // eliminar a la persona seleccionda del array original para que no se pueda escoger a si mismo
  nombres.splice(persona, 1);

  // seleccionar su amigo amigo
  let amigo = aleatorio(1,nombres.length);

  lista2.push(nombres[amigo]);
  console.log("amigo: " +lista2[amigo]);
  console.log(nombres);
  }
}
