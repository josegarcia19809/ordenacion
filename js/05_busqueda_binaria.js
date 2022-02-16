const btnBuscar = document.getElementById("btn_buscar");
const txtBuscar = document.getElementById("txt_buscar");
const primerRenglon = document.getElementById("valores");
const segundoRenglon = document.getElementById("indices");
const tercerRenglon = document.getElementById("indicador");
const valores = [1, 3, 5, 7, 9, 12, 15, 18, 30, 45, 50, 65, 80, 95, 110, 200, 231, 250];
const nElementos = valores.length - 1;
let bajo = 0;
let alto = valores.length - 1;
let mitad = (bajo + alto) / 2;
let buscando;
let valorABuscar = 0;
let i = 0, j = 0;
llenar();

btnBuscar.addEventListener("click", function (e) {
    e.preventDefault();
    valorABuscar = Number(txtBuscar.value);
    buscando = valores[mitad];
    if (buscando == valorABuscar) {
        alert("Encontrado")
    } else if (buscando > valorABuscar) {
        alto = mitad - 1;
    } else if (buscando < valorABuscar) {
        bajo = mitad + 1;
    }
    if (bajo > alto){
        alert("No encontrado");
        return;
    }
    mitad = Math.floor((bajo + alto) / 2);
    console.log(bajo, alto, mitad);
    llenarIndicador();
})

function llenar() {
    primerRenglon.innerHTML = "";
    let contador = 0;
    valores.forEach(function (jugador) {
        //const imagen = document.createElement("img");
        const casilla = document.createElement("td");
        casilla.innerHTML=`<h1>${jugador}</h1>`;
        primerRenglon.appendChild(casilla);
        contador++;
    });
    for ( let i=0; i<contador; i++){
        const casilla = document.createElement("td");
        casilla.innerHTML=`<h3>[${i}]</h3>`;
        segundoRenglon.appendChild(casilla);
    }
}

llenarIndicador()

function llenarIndicador() {
    const divJugadores = document.getElementById("img_arreglo");
    tercerRenglon.innerHTML = "";
    let contador = 0;
    valores.forEach(function (jugador) {
        const imagen = document.createElement("img");
        const casilla = document.createElement("td");
        imagen.src = `img/c${jugador}.png`;
        imagen.width = 50;
        imagen.height = 100;
        if (contador === bajo) {
            imagen.src = `img/bajo2.png`;
        } if (contador === alto) {
            imagen.src = `img/alto2.png`;
        } if (contador === mitad) {
            imagen.src = `img/mitad2.png`;
        }
        if(contador !==bajo && contador !==alto && contador !==mitad){
            imagen.src = `img/blanco.png`;
            imagen.style.border = 'solid 1px black';
        }

        casilla.appendChild(imagen);
        tercerRenglon.appendChild(casilla);
        contador++;
    });
}



