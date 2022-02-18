const btnBuscar = document.getElementById("btn_buscar");
const txtBuscar = document.getElementById("txt_buscar");
const primerRenglon = document.getElementById("valores");
const segundoRenglon = document.getElementById("indices");
const tercerRenglon = document.getElementById("indicador");
const txtSalida = document.getElementById("salida");
const valores = [1, 3, 5, 7, 9, 12, 15, 18, 30, 45, 50, 65, 80, 95, 110, 200, 231, 250,
    304, 520, 601];
const nElementos = valores.length - 1;
let bajo = 0;
let alto = valores.length - 1;
let mitad = -1;// Math.floor((bajo + alto) / 2);
let buscando;
let valorABuscar = 0;
let i = 0, j = 0;
llenar();
let siguientePaso = false;
let salida = "";

btnBuscar.addEventListener("click", function (e) {
    e.preventDefault();
    if (!siguientePaso) {
        valorABuscar = Number(txtBuscar.value);
        buscando = valores[mitad];
        salida = `Valor a buscar: ${valorABuscar}`;
        txtSalida.innerHTML = `<h1>${salida}</h1>`;
        if (buscando === valorABuscar) {
            alert("Encontrado en la posición: " + mitad);
        } else if (buscando > valorABuscar) {
            alto = mitad - 1;
        } else if (buscando < valorABuscar) {
            bajo = mitad + 1;
        }
        if (bajo > alto) {
            alert("No encontrado");
            return;
        }

    } else {
        mitad = Math.floor((bajo + alto) / 2);
    }
    siguientePaso = !siguientePaso;
    llenar();
    llenarIndicador();

})

function llenar() {
    primerRenglon.innerHTML = "";
    segundoRenglon.innerHTML = "";
    let contador = 0;
    valores.forEach(function (jugador) {
        const casilla = document.createElement("td");
        casilla.innerHTML = `<h1>${jugador}</h1>`;
        // Para agregar colores a las casillas
        if (contador < bajo || contador > alto) {
            casilla.style.textDecoration = "line-through";
            casilla.style.backgroundColor = "#34495e";
            casilla.style.color = "#ffffff";
        } else {
            casilla.style.backgroundColor = "#2980b9";
            casilla.style.color = "#ffffff";
        }
        primerRenglon.appendChild(casilla);
        contador++;
    });
    for (let i = 0; i < contador; i++) {
        const casilla = document.createElement("td");
        casilla.innerHTML = `<h3>[${i}]</h3>`;
        segundoRenglon.appendChild(casilla);
    }
}

llenarIndicador()

function llenarIndicador() {
    tercerRenglon.innerHTML = "";
    let contador = 0;
    valores.forEach(function (jugador) {
        const imagen = document.createElement("img");
        const casilla = document.createElement("td");
        // Para agregar las imagenes
        imagen.src = `img/c${jugador}.png`;
        imagen.width = 50;
        imagen.height = 100;
        if (contador === bajo) {
            imagen.src = `img/bajo2.png`;
        }
        if (contador === alto) {
            imagen.src = `img/alto2.png`;
        }
        if (contador === mitad) {
            imagen.src = `img/mitad2.png`;
        }
        if (contador !== bajo && contador !== alto && contador !== mitad) {
            imagen.src = `img/blanco.png`;
            imagen.style.border = 'solid 1px black';
        }

        casilla.appendChild(imagen);
        tercerRenglon.appendChild(casilla);
        contador++;
    });
}



