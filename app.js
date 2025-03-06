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
    document.getElementById('amigo').value = "";
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
      console.log(lista[amigoSeleccionado]);
      lista.splice(amigoSeleccionado, 1);
    }else if( lista.length == 1){
      console.log(lista[0]);
      lista.splice(0, 1);

    }else if (lista.length == 0){
      console.log ("ya no hay más amigos para sortear")


    }

  }