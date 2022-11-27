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

