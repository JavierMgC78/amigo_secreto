"use strict"

//VARIABLES
const nameInputElement = document.getElementById("amigo");
var friendsList = [];
var friendsListCopy = [];



//FUNCTIONS
function agregarAmigo(amigo){
    friendsList.push(amigo);
    console.log(friendsList);

    //visualizando la lista de amigos
    const listaElement = document.querySelector("#listaAmigos");
    const elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;

    listaElement.appendChild(elementoLista);

}


function sortearAmigo(){
    let numberOfFriends = friendsList.length;
    //Copiar la lista de amigos
    friendsListCopy[)] = friendsList[]; 
    //seleccionar una persona
    let personIndex = rndNumber(Math.random() * (numberOfFriends + 1);
    //borrar la persona seleccionada de la lista copia (asegurar que no se seleccione asi mismo)
    friendsListCopy.splice(numberOfFriends, 1);
    //escoger su amigo secret
    let secretFriend = rndNumber(Math.random() * (numberOfFriends - 1)

}

function rndNumber(max){
    
    let randomNumber = Math.floor(Math.random() * (max + 1));
    console.log(randomNumber);
    return randomNumber;

}