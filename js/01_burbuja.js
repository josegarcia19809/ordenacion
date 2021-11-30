const btnOrdenar=document.getElementById("btn_ordenar");
//const jugadores=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jugadores=[10, 9, 7, 4, 6, 5, 3, 8, 2, 1];
const nElementos=jugadores.length-1;
let i=0;
let j=0;
llenar();
btnOrdenar.addEventListener("click", function (e) {
   e.preventDefault();
   llenar();
   if (jugadores[j] > jugadores[j + 1]) {//si numero Actual > numero siguiente
      let aux = jugadores[j];
      jugadores[j] = jugadores[j + 1];
      jugadores[j + 1] = aux;
   }

   j++;
   if(j==nElementos){
      i++;
      j=0;
   }

})

function llenar() {
   const divJugadores=document.getElementById("img_jugadores");
   divJugadores.innerHTML="";
   let contador=0;
   jugadores.forEach(function (jugador) {
      const imagen=document.createElement("img");
      imagen.src=`img/j${jugador}.png`;
      imagen.width=100;
      imagen.height=300;
      if (contador==j || contador==(j+1)) {
         imagen.style.border = 'solid 4px red';
      }
      else {
         imagen.style.border = 'solid 1px black';
      }
      divJugadores.appendChild(imagen);
      contador++;
   });
}

