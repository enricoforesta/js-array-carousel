Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1

Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

MILESTONE 2

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


## Logica

1. Avendo già Html e Css, leggiamo il codice e capiamo come è stato scritto, le classi associate e in caso ottimizzare qualcosa.

2. Creiamo il nostro Array d'immagini.

2. Eliminiamo il markup dall html e lo aggiugniamo con JS. 
 - Dichiariamo una costante, collegata all html. 
 - Creo un "<div>" con classe ".items" che contiene i contenitori delle immagini. 
 - Creo "<div>"  con classe ".item" che contiente le immagini, per quanti elementi contiene l' Array.
 - Dentro il "<div>" con classe ".item" scrivo il collegamento delle immagini.
