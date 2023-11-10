/*<div class="items">
<div class="item active">
  <img src="./img/01.jpg" alt="" />
</div>*/

"use strict"

//Array
const immagini = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg",];
console.log(immagini.length);
console.log({immagini});

// Variabili Container
const elementContainer = document.querySelector(".container");
console.log({elementContainer});

// Creo un "<div>" con classe ".items" che contiene i contenitori delle immagini.
 elementContainer.innerHTML = "<div>"

// // Variabile Items
// const elementContainerImmagini = document.querySelector(".items");
// console.log({elementContainerImmagini});

// // Ciclo per creare i div dentro gli items

//  for( let i = 0; i < immagini.length - 1; i++){
    
//     elementContainerImmagini.innerHTML = "<div>";
    
// }
