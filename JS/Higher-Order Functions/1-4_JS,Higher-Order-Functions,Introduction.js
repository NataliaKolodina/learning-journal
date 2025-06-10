// 1-4_JS,Higher-Order-Functions,Introduction

/* ======================================
ESERCIZIO 1: Funzione come variabile

1. Crea una funzione anonima che stampa "Sto lavorando!" nella console.
2. Assegna questa funzione a una variabile chiamata `lavoroImportante`.
3. Chiama la funzione tramite la variabile `lavoroImportante`.
   // Risultato atteso in console: Sto lavorando!

Salva il file, esegui il codice e verifica l'output.

// ====================================== */

/* ======================================
ESERCIZIO 2: Funzione di ordine superiore con funzione anonima

1. Definisci una funzione chiamata `eseguiCallback` che prende un parametro `callback`.
2. All'interno di `eseguiCallback`, invoca `callback`.
3. Chiama `eseguiCallback` passando una funzione anonima che stampa i numeri da 1 a 5 nella console.
   // Risultato atteso in console: 1 2 3 4 5 (ognuno su una nuova riga)

Salva il file, esegui il codice e verifica l'output.
====================================== */

let lavoroImportante = function () {
  console.log("Sto lavorando!");
};
lavoroImportante();

function eseguiCallback(callback) {
  callback();
}
eseguiCallback(function () {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
});
