const btnOrdenar = document.getElementById("btn_ordenar");
const jugadores = [10, 9, 7, 4, 6, 5, 3, 8, 2, 1];
const nElementos = jugadores.length - 1;
let i = 1;
let activo = true;
let k = 0;
let sw = false;
let aux = 0;
llenar();


btnOrdenar.addEventListener("click", function (e) {
    e.preventDefault();
    if (i >= nElementos+2) {
        activo = false;
    } else {
        activo = true;
    }

    aux = jugadores[i];
    k = i - 1;
    sw = false;
    llenar();
    while (!sw && k >= 0) {
        if (aux < jugadores[k]) {
            jugadores[k + 1] = jugadores[k];
            k--;
        } else {
            sw = true;
        }
    }
    jugadores[k + 1] = aux;
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
        if ((contador === (k + 1)) && activo) {
            imagen.style.border = 'solid 4px red';
        } else {
            imagen.style.border = 'solid 1px black';
        }
        if (!activo)return;
        divJugadores.appendChild(imagen);
        contador++;
    });
}


