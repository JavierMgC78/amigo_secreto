const nombres = []; 
const lista1 =[];
const lista2 =[];
var lista = []; // Array lista de amigos

function agregarAmigo(nombre) {
  // Obtener ontenedor de la lista de amigos Ul
  const listaContainer = document.getElementById("listaAmigos");  
  
  //crear elemento li
  const li = document.createElement("li");

  
  if(nombre == ""){
      alert("campo vacio");
  }else{
    // añadir amigo al array de amigos
    lista.push(nombre);
    // añadir el nombre a li
    li.textContent = nombre +" agregado correctamente";
    // limpiar lista
    listaContainer.innerHTML= "";
    // añadir nombre al li
    listaContainer.appendChild(li);     
        
    console.log(lista);  
  }
        
 
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
