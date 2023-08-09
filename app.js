//let categoria = prompt("Ingresa tu categoría:").toUpperCase();

let horarios = {
    "menores": "Lunes y Miércoles a las 18:30",
    "cadetes": "Martes y Jueves a las 19:30",
    "juveniles": "Lunes, Miércoles y Viernes a las 20:00"
};

let cantidad = parseInt(prompt("Cantidad de veces que desea ingresar categorías:"));

for (let i = 0; i < cantidad; i++) {
    let categoria = prompt("Ingresá tu categoría:").toLowerCase();

if (horarios.hasOwnProperty(categoria)) {
    alert("Tu horario de entrenamiento es: " + horarios[categoria]);
} else {
    alert("Categoría no válida. Por favor, ingresa 'menores', 'cadetes' o 'juveniles'.");
}
}

alert("Gracias, Te esperamos!")