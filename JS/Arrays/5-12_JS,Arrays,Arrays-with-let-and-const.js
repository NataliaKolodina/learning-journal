// 5-12_JS,Arrays,Arrays-with-let-and-const
/* ======================================
🔸 Esercizio 1: Modifica elementi in un array dichiarato con const
1. Dichiara un array `condiments` con const e assegna questi valori, in quest’ordine:
   'ketchup', 'mustard', 'mayo'.
2. Modifica l’elemento all’indice 1 in 'hot sauce'.
3. Stampa l’intero array `condiments` nella console.
   // Output atteso: ['ketchup', 'hot sauce', 'mayo']

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere il risultato.
====================================== */

/* ======================================
🔸 Esercizio 2: Riassegna una variabile array dichiarata con let
1. Dichiara una variabile `utensils` con let e assegnale un array con questi valori:
   'fork', 'knife', 'spoon'.
2. Riassegna completamente la variabile `utensils` con un nuovo array contenente:
   'chopsticks', 'spork', 'whisk'.
3. Stampa l’intero array `utensils` nella console.
   // Output atteso: ['chopsticks', 'spork', 'whisk']

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere il risultato.
====================================== */

const condiments = ['ketchup', 'mustard', 'mayo'];
condiments[1] = 'hot sauce';
console.log(condiments);

let utensils = ['fork', 'knife', 'spoon'];
utensils = ['chopsticks', 'spork', 'whisk'];
console.log(utensils);