// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para sortear.");
        return;
    }
    
    let asignaciones = new Map();
    let disponibles = [...amigos];
    
    for (let amigo of amigos) {
        let posibles = disponibles.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            alert("No se pudo completar el sorteo, intente de nuevo.");
            return;
        }
        
        let seleccionado = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones.set(amigo, seleccionado);
        disponibles = disponibles.filter(a => a !== seleccionado);
    }
    
    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    asignaciones.forEach((valor, clave) => {
        const li = document.createElement("li");
        li.textContent = `${clave} → ${valor}`;
        resultado.appendChild(li);
    });
}
