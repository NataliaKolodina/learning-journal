// 4-12_JS,Arrays,Update-Elements

/* ======================================
🔸 Esercizio 1: Aggiornare il valore di un elemento in un array
1. Crea una variabile chiamata `months` e assegnale un array con queste stringhe esatte e in quest’ordine:
   'January', 'February', 'March', 'April'.
2. Aggiorna l’elemento all’indice 2 con la stringa 'March-April' (unisci i due mesi in una sola stringa).
3. Stampa l’intero array `months` nella console.
   // Output atteso: ['January', 'February', 'March-April', 'April']

Salva le modifiche, aggiorna la pagina ed esegui il codice per controllare l’output.
====================================== */

/* ======================================
🔸 Esercizio 2: Aggiorna un elemento in un array
1. Crea una variabile chiamata `animals` e assegnale un array con questi elementi: 
   'dog', 'cat', 'lion', 'elephant'.
2. Aggiorna l’elemento all’indice 2 da 'lion' a 'tiger'.
3. Stampa l’intero array `animals` nella console.
   // Output atteso: ['dog', 'cat', 'tiger', 'elephant']

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere l’output.
====================================== */

const months = ['January', 'February', 'March', 'April'];
months[2] = 'March-April';
console.log(months);

const animals = ['dog', 'cat', 'lion', 'elephant'];
animals[2] = 'tiger';
console.log(animals);