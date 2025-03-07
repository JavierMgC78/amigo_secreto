// VARIABLES GLOBALES
var lista = []; // Array de amigos
var amigoIngresado = new Audio("assets/moneda.mp3");
var inptIngresareAmigo = document.getElementById('amigo');
var listaContainer = document.getElementById("listaAmigos"); 
var amigoSeleccionadoContainer = document.getElementById("amigoSeleccionado");

/************
 * FUNCIONES
 ************/
/**
 * Agrega el nombre de un amigo al array lista 
 * @param {String} nombre nombre del amigo agrgado
 */
function agregarAmigo(nombre) {
  //crear elemento li
  const li = document.createElement("li");
  
  if(nombre == ""){
      alert("campo vacio");
  }else{
    // añadir amigo al array de amigos
    lista.push(nombre);
    verAmigosIngresados(nombre);
    // añadir el nombre a li
    //li.textContent = nombre +" agregado correctamente";

    // añadir nombre al li
    listaContainer.appendChild(li);     
        
    console.log(lista);  
    amigoIngresado.play();
    inptIngresareAmigo.value = ""
    
  }
}

/**
 * escoge el nombre de un amigo al azar.
 * Selecciona un numero aleatorio dentro de un rango especifgicado
 * este número es el indice seleccionado del array lista. 
 * @param {Int} min frontera inferior del rango 
 * @param {Int} max frontera superior del rango
 * @returns {void}
 */
function seleccionarAmigo(min, max){
let num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);
return num;
}

/**
 * muestra los amigos que se van ingresando
 * @param {String} nombre nombre del amigo ingresado
 * @modifies {document.body} Agrega un nuevo elemento <li> al <ul>con id="listaAmigos".
 */
function verAmigosIngresados(nombre){
  //crear elemento li
  const li = document.createElement("li");
  //li.textContent = nombre + "agregado correctamente";
  li.innerHTML = `<strong>${nombre} </strong> "agregado correctamente`;
  listaContainer.appendChild(li);
}


/**
 * muestrta el amigo seleccionado
 * @param {*} amigos  array de amigos
 * @param {*} seleccion indice seleccionado del array de amigos
 * @modifies {document.body} Agrega un nuevo elemento <h2> al body del documento.
 */
function verAmigoSeleccionado(amigos, seleccion, sinAmigos = false){
  const amigo = document.createElement("h2");
  if (sinAmigos){
    amigo.innerHTML = "<span style='color: red;'>YA SE SORTEARON TODOS LOS AMIGOS</span>";

  }else{  
    amigo.innerText = amigos[seleccion];

  }
  amigoSeleccionadoContainer.appendChild(amigo);
}

/**
 * selecciona un amigo del array de amigos. 
 * El emigo seleccionado es eliminado del array para evitar que sea seleccionado de nuevo
 */
function sortearAmigo(){
  if(lista.length > 1){
    
      let amigoSeleccionado = seleccionarAmigo(1, lista.length - 1);

      verAmigoSeleccionado(lista, amigoSeleccionado);

      // Eliminar seleccionado
      lista.splice(amigoSeleccionado, 1);

    }else if( lista.length == 1){
      console.log(lista[0]);

      verAmigoSeleccionado(lista, 0);

      // Eliminar seleccionado
      lista.splice(0, 1);

    }else if (lista.length == 0){
      verAmigoSeleccionado(lista, 0, true);
      console.log ("ya no hay más amigos para sortear")
    }
  }

