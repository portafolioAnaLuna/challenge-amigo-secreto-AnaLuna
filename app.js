let listaAmigos = [];
const escribirAmigos = document.getElementById("amigo");
const creandoListaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado"); 
const botonAñadir = document.querySelector(".button-add");

escribirAmigos.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo(){
    const amigo = escribirAmigos.value.trim();
    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (!isNaN(amigo)) {
        alert("El nombre no puede ser un número.");
        limpiarCaja();
        return;
    };
    if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya fue añadido.");
        limpiarCaja();
        return;
    };
    listaAmigos.push(escribirAmigos.value);
    creandoListaAmigos.innerHTML = creandoListaAmigos.innerHTML + `<li>${escribirAmigos.value}</li>`;
    limpiarCaja();
};

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    escribirAmigos.focus();
};

function sortearAmigo(){
    const random = Math.floor((Math.random()*listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    resultadoSorteo.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`
};

