/*
<div class="item active">
  <img src="./img/01.jpg" alt="" />
</div>*/

"use strict"

//Array
const immagini = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",];
console.log({ immagini });

// Variabile Items Immagini
const elementItems = document.querySelector(".items");
console.log({ elementItems });

let elementItem = " ";

// Ciclo per creare i div dentro gli items
for (let i = 0; i < immagini.length; i++) {

  elementItem += (`<div class="item">
    <img src="img/${immagini[i]}" alt="Paesaggio ${i + 1}" />
  </div>`);
}
elementItems.innerHTML += elementItem;



//Variabile immagine corrente
let elementCorrente = 0;

// Aggiungo la classe Active
const elementActive = document.querySelectorAll(".item");
console.log(elementActive)

elementActive[elementCorrente].classList.add("active");
console.log({ elementCorrente })

// Creo le variabili collegate alle frecce
const elementUp = document.querySelector(".next");
const elementDown = document.querySelector(".prev");
console.log({ elementUp });
console.log({ elementDown });

elementUp.addEventListener("click", function () {
  elementActive[elementCorrente].classList.remove("active");
  if (elementCorrente === elementActive.length - 1) {
    elementCorrente = 0;
  } else {
    elementCorrente++
  }
  elementActive[elementCorrente].classList.add("active");
  console.log(elementCorrente)
}
)

elementDown.addEventListener("click", function () {
  elementActive[elementCorrente].classList.remove("active");
  if (elementCorrente === 0) {
    elementCorrente = elementActive.length - 1;
  } else {
    elementCorrente--
  }
  elementActive[elementCorrente].classList.add("active");
  console.log(elementCorrente)
}
)


// elementItems.innerHTML += (`<div class="items-thub">`);

// const elementImmagini = document.querySelector(".items-thub");

// for (let i = 0; i < immagini.length; i++) {

//   elementImmagini.innerHTML += (`<img src="img/${immagini[i]}" alt="" />/>`)
// }
// ;