// VARIABLES GLOBALES
var lista = []; // Array de amigos
var amigoIngresado = new Audio("assets/moneda.mp3");
var inptIngresareAmigo = document.getElementById('amigo');
var listaContainer = document.getElementById("listaAmigos"); 
var verAmigoSeleccionado = document.getElementById("amigoSeleccionado");

/************
 * FUNCIONES
 ************/

function agregarAmigo(nombre) {
  //crear elemento li
  const li = document.createElement("li");
  
  if(nombre == ""){
      alert("campo vacio");
  }else{
    // añadir amigo al array de amigos
    lista.push(nombre);
    // añadir el nombre a li
    li.textContent = nombre +" agregado correctamente";

    // añadir nombre al li
    listaContainer.appendChild(li);     
        
    console.log(lista);  
    amigoIngresado.play();
    inptIngresareAmigo.value = ""
    
  }
        
 
}

function seleccionarAmigo(min, max){
let num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);
return num;
}

function sortearAmigo(){
  if(lista.length > 1){
      let amigoSeleccionado = seleccionarAmigo(1, lista.length - 1);

      const amigo = document.createElement("h2");
      amigo.innerText = lista[amigoSeleccionado]
      
      verAmigoSeleccionado.appendChild(amigo);
      console.log(lista[amigoSeleccionado]);


      lista.splice(amigoSeleccionado, 1);
    }else if( lista.length == 1){
      console.log(lista[0]);
      lista.splice(0, 1);

    }else if (lista.length == 0){
      console.log ("ya no hay más amigos para sortear")


    }

  }