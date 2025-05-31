// 4-7_JS,Scope,Block-Scope
/* ======================================
🔸 ESERCIZIO 1: Creare e usare una variabile con block scope in una funzione
1. Crea una funzione chiamata `showCity`.
2. All’interno della funzione `showCity`, dichiara una variabile `city` usando `let` e assegnale la stringa `"Rome"`.
3. Subito dopo, stampa il valore della variabile `city` nella console. // Risultato atteso: Rome
4. Chiama la funzione `showCity`.
5. Dopo la chiamata alla funzione, prova a stampare la variabile `city` nella console. // Risultato atteso: ReferenceError
6. Verifica i risultati nella console.
====================================== */
/* ======================================
🔸 ESERCIZIO 2: Verificare il block scope all’interno di un blocco if
1. Dichiara una costante `
` e assegnale il valore `true`.
2. Scrivi un blocco `if` che controlla se `isMorning` è vera.
3. All’interno del blocco `if`, dichiara una variabile `greeting` usando `let` e assegnale il valore `"Good morning!"`.
4. Subito dopo, stampa la variabile `greeting` nella console. // Risultato atteso: Good morning!
5. Dopo il blocco `if`, prova a stampare di nuovo la variabile `greeting` nella console. // Risultato atteso: ReferenceError
6. Verifica i risultati nella console.
====================================== */

function showCity() {
  let city = "Rome";
  console.log(city);
}
showCity();
console.log(city);

const isMorning = true;
if (isMorning) {
  let greeting = "Good morning!";
  console.log(greeting);
}
console.log(greeting);
