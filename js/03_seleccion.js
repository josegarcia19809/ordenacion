const btnOrdenar = document.getElementById("btn_ordenar");
const jugadores = [8, 9, 7, 4, 6, 5, 3, 10, 2, 1];
const nElementos = jugadores.length - 1;
let i = 0;
let activo = true;
let j = 0;
let aux = 0;
let min = 0;
llenar();
btnOrdenar.addEventListener("click", function (e) {
    e.preventDefault();
    activo = true;
    aux = jugadores[i];
    min = i;
    j = i + 1;
    llenar();
    while (j <= nElementos) {
        if (jugadores[j] < aux) {
            aux = jugadores[j];
            min = j;
        }
        j++;
    }
    jugadores[min] = jugadores[i];
    jugadores[i] = aux;
    i++;
})

function llenar() {
    const divJugadores = document.getElementById("img_jugadores");
    divJugadores.innerHTML = "";
    let contador = 0;
    jugadores.forEach(function (jugador) {
        const imagen = document.createElement("img");
        imagen.src = `img/j${jugador}.png`;
        imagen.width = 100;
        imagen.height = 300;
        if ((contador === (min)) && activo) {
            imagen.style.border = 'solid 4px red';
        } else {
            imagen.style.border = 'solid 1px black';
        }
        if (!activo) return;
        divJugadores.appendChild(imagen);
        contador++;
    });
}


