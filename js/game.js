const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

const $mapa = document.querySelector("#mapa");
let nroClicks = 0;

$mapa.addEventListener("click", (e) => {
    nroClicks++;
    let distance = getDistance(e, target);

    getDistanceHint(distance);

    if (distance < 10) {

        const contenedorImagen = document.createElement("div");
        contenedorImagen.classList.add("flex", "w-full", "justify-center", "content-center", "items-center", "text-center");
        const imagen = document.createElement("img");
        imagen.src = "img/treasure.svg";
        imagen.classList.add("w-[100px]");
        contenedorImagen.appendChild(imagen);

        swal({
            title: "Felicidades! Ha encontrado el tesoro!",
            text: `Lo has encontrado luego de ${nroClicks} clicks.`,
            content: contenedorImagen,
            dangerMode: true,
            className: "bg-[#cccccc]",
        })
            .then(() => {
                window.location.reload();
            });
    }
});
