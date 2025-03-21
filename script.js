function calcularPuntuacion() {
    // Obtener los valores de las puntuaciones, si no se ingresan se asigna 0
    let psicologia = parseFloat(document.getElementById("psicologia").value) || 0;
    let ejecucion = parseFloat(document.getElementById("ejecucion").value) || 0;
    let entretenimiento = parseFloat(document.getElementById("entretenimiento").value) || 0;
    let publico = parseFloat(document.getElementById("publico").value) || 0;
    let final = parseFloat(document.getElementById("final").value) || 0;
    let innovacion = parseFloat(document.getElementById("innovacion").value) || 0;
    
    // Sumar las puntuaciones de todas las categorías
    let puntuacionTotal = psicologia + ejecucion + entretenimiento + publico + final + innovacion;
    
    // Calcular la puntuación media
    let puntuacionMedia = puntuacionTotal / 6;
    
    // Verificar si la puntuación es un número entero
    let puntuacionTexto = Number.isInteger(puntuacionMedia) ? `${puntuacionMedia}/10` : `${puntuacionMedia.toFixed(1)}/10`;
    
    // Mostrar el resultado con la puntuación final
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerText = `Puntuación final del combate: ${puntuacionTexto}`;
    
    // Cambiar el color según la puntuación
    resultadoElemento.style.color = puntuacionMedia > 7 ? "#4CAF50" : puntuacionMedia > 4 ? "#FFC107" : "#F44336";
}
