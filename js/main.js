/*
<div class="item active">
  <img src="./img/01.jpg" alt="" />
</div>*/

"use strict"

//Array
const immagini = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",];
console.log({ immagini });

// Variabili Container Immagini
const elementContainer = document.querySelector(".items");
console.log({ elementContainer });


// Ciclo per creare i div dentro gli items

for (let i = 0; i < immagini.length - 1; i++) {

    elementContainer.innerHTML += (`<div class="item">
    <img src="./img/0${i + 1}.jpg" alt="" />
  </div>`);
}

// Aggiungo la classe Active
const elementActive = document.querySelector(".item");
elementActive.classList.add("active")
console.log(elementActive)