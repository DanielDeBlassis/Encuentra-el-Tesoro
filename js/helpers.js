/**
 * Genera y devuelve un número entero al azar dentro de un rango especificado por parámetro
 * @param {Number} size límite de números aleatorios
 * @returns un número entero al azar dentro del rango especificado
 */
let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
};

/**
 * Calcula la distancia entre el tesoro y el click del jugador
 * @param {Event} e evento de tipo click
 * @param {Object} target ubicación del tesoro en el juego
 * @returns 
 */
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY + diffY));
};

/**
 * Toma como parámetro la distancia entre el click y el tesoro y muestra una pista según la cercanía
 * @param {Number} distance distancia del click al tesoro
 * @returns mensaje indicando la cercanía
 */
let getDistanceHint = distance => {
    let texto = "";
    let color = "";

    if (distance < 30) {
        texto = "Casi lo tienes";
        color = "green"
        return mensaje(texto, color);
    } else if (distance < 40) {
        texto = "Muy caliente";
        color = "red";
        return mensaje(texto, color);
    } else if (distance < 60) {
        texto = "Caliente";
        color = "orange";
        return mensaje(texto, color);
    } else if (distance < 100) {
        texto = "Tibio";
        color = "yellow";
        let colorTexto = "black";
        return mensaje(texto, color, colorTexto);
    } else if (distance < 180) {
        texto = "Frío";
        color = "bluelight"
        return mensaje(texto, color);
    } else if (distance < 360) {
        texto = "Muy frío";
        color = "blue";
        return mensaje(texto, color);
    } else {
        texto = "Congelado";
        color = "blueviolet";
        return mensaje(texto, color);
    }
}

