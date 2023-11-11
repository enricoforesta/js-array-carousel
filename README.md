Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1

Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

MILESTONE 2

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


## Logica

### MILESTONE 1


1. Avendo già Html e Css, leggiamo il codice e capiamo come è stato scritto, le classi associate e in caso ottimizzare qualcosa.

2. Creiamo il nostro Array d'immagini.

2. Eliminiamo il markup dall html e lo aggiugniamo con JS. 
 - Dichiariamo una costante, collegata all html. 
 - Creo un ciclo per Creare i "<div>".
 - Aggiungo la classe ".active" che servira per mostrare le immagini che in base a una variabile aggiunge la classe solo all immagine da mostrare. 

### MILESTONE 2

1. Dichiaro due variabili, e le collego alle freccie che useremo per scorrere le immagini.

2. Scateniamo due eventi.
 - Il primo colleghiamo la prima variabile, e ogni volta che viene cliccato, la variabile "elementCorrente" aumenta di 1.
 - Il secondo colleghiamo la prima variabile, e ogni volta che viene cliccato, la variabile "elementCorrente" diminiusce di 1.
 

