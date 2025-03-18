let listaAmigos = [];
const escribirAmigos = document.getElementById("amigo");
const creandoListaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado"); 
const botonAñadir = document.querySelector(".button-add");

escribirAmigos.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // Ejecutar la función al presionar Enter
    }
});

function agregarAmigo(){
    const amigo = escribirAmigos.value.trim();
    
    // Validación: asegurarse de que sea un string y no esté vacío
    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Detener la función si el campo está vacío
    }

    // Validación: asegurarse de que el nombre no sea un número
    if (!isNaN(amigo)) {
        alert("El nombre no puede ser un número.");
        limpiarCaja();
        return;
    };
    
    // Validación: asegurarse de que el nombre no esté repetido
    if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya fue añadido.");
        limpiarCaja();
        return;
    };
    listaAmigos.push(escribirAmigos.value);
    creandoListaAmigos.innerHTML = creandoListaAmigos.innerHTML + `<li>${escribirAmigos.value}</li>`;
    // creandoListaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`; 
    //es lo mismo que lo de arriba, pero de una forma abrebiada
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

