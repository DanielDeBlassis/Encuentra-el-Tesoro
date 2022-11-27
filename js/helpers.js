/**
 * Genera y devuelve un número entero al azar dentro de un rango especificado por parámetro
 * @param {Number} size límite de números aleatorios
 * @returns un número entero al azar dentro del rango especificado
 */
let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
};
