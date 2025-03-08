var lista = []; // Array de amigos
var listaRespaldo = []; // Guarda el estado anterior de la lista

var btnS = document.getElementById("btn-sortear");
var amigoIngresado = new Audio("assets/moneda.mp3");
var inptIngresareAmigo = document.getElementById('amigo');
var listaContainer = document.getElementById("listaAmigos"); 
var amigoSeleccionadoContainer = document.getElementById("amigoSeleccionado");
var ultimoSorteado = null; // Guarda el último amigo sorteado


/**
 * Agrega el nombre de un amigo al array lista 
 * @param {String} nombre Nombre del amigo agregado
 */
function agregarAmigo(nombre) {
    if (nombre.trim() === "") {
        alert("Campo vacío");
        return;
    }

    // Añadir amigo al array
    lista.push(nombre);

    // Mostrar en la lista
    verAmigosIngresados(nombre);

    // Reproducir sonido
    amigoIngresado.play();

    // Limpiar input
    inptIngresareAmigo.value = "";
}




/**
 * Escoge un número aleatorio dentro de un rango especificado
 * @param {Int} min Frontera inferior del rango 
 * @param {Int} max Frontera superior del rango
 * @returns {Int} Número aleatorio dentro del rango
 */
function seleccionarAmigo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Muestra los amigos ingresados en la lista
 * @param {String} nombre Nombre del amigo ingresado
 * @modifies {document.body} Agrega un nuevo elemento <li> al <ul> con id="listaAmigos".
 */
function verAmigosIngresados(nombre) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${nombre}</strong> agregado correctamente`;
    listaContainer.appendChild(li);
}



/**
 * Muestra el amigo seleccionado
 * @param {Array} amigos Array de amigos
 * @param {Int} seleccion Índice seleccionado del array de amigos
 * @param {Boolean} sinAmigos Indica si ya no hay amigos para sortear
 * @modifies {document.body} Agrega un nuevo elemento <h2> al body del documento.
 */
function verAmigoSeleccionado(amigos, seleccion, sinAmigos = false) {
    const amigo = document.createElement("h2");
    
    if (sinAmigos) {
        amigo.innerHTML = "<span style='color: red;'>YA SE SORTEARON TODOS LOS AMIGOS</span>";
    } else {  
        amigo.innerText = amigos[seleccion];
    }
    
    amigoSeleccionadoContainer.appendChild(amigo);
}

/**
 * Selecciona un amigo del array de amigos.
 * El amigo seleccionado es eliminado del array para evitar que sea seleccionado de nuevo.
 */
function sortearAmigo() {
    if (lista.length > 1) {
        let amigoSeleccionado;
        let intentos = 0;
        
        do {
            amigoSeleccionado = seleccionarAmigo(0, lista.length - 1);
            intentos++;
        } while (lista[amigoSeleccionado] === lista[0] && intentos < 10); // Evitar que se seleccione a sí mismo

        // Guardar el último amigo seleccionado y hacer un respaldo antes de eliminarlo
        ultimoSorteado = lista[amigoSeleccionado];
        listaRespaldo = [...lista];

        verAmigoSeleccionado(lista, amigoSeleccionado);

        // Eliminar seleccionado
        lista.splice(amigoSeleccionado, 1);

    } else if (lista.length === 1) {
        console.log(lista[0]);

        // Guardar el último sorteado
        ultimoSorteado = lista[0];
        listaRespaldo = [...lista];

        verAmigoSeleccionado(lista, 0);

        // Eliminar seleccionado
        lista.splice(0, 1);

    } else if (lista.length === 0) {
        verAmigoSeleccionado(lista, 0, true);
        console.log("Ya no hay más amigos para sortear");
    }
}

/**
 * Revierte el último sorteo si es necesario
 */
function deshacer() {
    if (ultimoSorteado !== null) {
        lista = [...listaRespaldo]; // Restaurar la lista
        alert(`Se canceló el último amigo sorteado: ${ultimoSorteado}`);
        ultimoSorteado = null; // Restablecer el último sorteado
    } else {
        console.log("No hay sorteos para revertir.");
    }
}
