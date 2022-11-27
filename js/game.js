const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

const $mapa = document.querySelector("#mapa");
let nroClicks = 0;
