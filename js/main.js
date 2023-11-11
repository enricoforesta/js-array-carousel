/*
<div class="item active">
  <img src="./img/01.jpg" alt="" />
</div>*/

"use strict"

//Array
const immagini = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",];
console.log({ immagini });

// Variabile Container Immagini
const elementContainer = document.querySelector(".items");
console.log({ elementContainer });

// Ciclo per creare i div dentro gli items
for (let i = 0; i < immagini.length; i++) {

  elementContainer.innerHTML += (`<div class="item">
    <img src="./img/0${i + 1}.jpg" alt="" />
  </div>`);
}

//Variabile immagine corrente
let elementCorrente = 0;

// Aggiungo la classe Active
const elementActive = document.querySelectorAll(".item");

elementActive[elementCorrente].classList.add("active");
console.log(elementCorrente)

// Creo le variabili collegate alle frecce
const elementUp = document.querySelector(".next");
const elementDown = document.querySelector(".prev");
console.log({ elementUp });
console.log({ elementDown });

// CON  IL MODULO "%" ELEMENTCORRENTE PUò AUMENTARE FINO ALLA LUNGHEZZA DELL ARRAY, SUPERATO LA LUGNHEZZA RITORNA ALL INIZIO. (??????????)
elementUp.addEventListener("click", function () {
  elementActive[elementCorrente].classList.remove("active");
  elementCorrente = (elementCorrente + 1) % elementActive.length;
  elementActive[elementCorrente].classList.add("active");
  console.log(elementCorrente)
}
)

// CON  IL MODULO "%" ELEMENTCORRENTE PUò DIMUNIRE FINO ALLA LUNGHEZZA DELL ARRAY, MA SE IL RISULTATO E' NEGATIVO DA ERRORE, QUINDI AGGIUNGIAMO LA LUNGHEZZA STESSA,COSI RESTITUISCE IL VALORE DI INIZIALE. (??????????)
elementDown.addEventListener("click", function () {
  elementActive[elementCorrente].classList.remove("active");
  elementCorrente = (elementCorrente - 1 + elementActive.length) % elementActive.length;
  elementActive[elementCorrente].classList.add("active");
  console.log(elementCorrente)
}
)