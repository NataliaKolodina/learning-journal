//  1-11_JS,Conditional-Statements,Introduction
/* ======================================
 🔸 EXERCISE 1: Controllare lo stato di accesso utente
Crea una variabile chiamata isLoggedIn e assegnale il valore false.
Usa un operatore ternario per stampare "Welcome back!" se isLoggedIn è vero oppure "Please log in." se è falso.
 // Risultato atteso: Please log in.
Salva le modifiche ed esegui il codice per vedere il messaggio stampato correttamente.
 ====================================== */
/* ======================================
 🔸 EXERCISE 2: Valutare l’idoneità al concorso
Crea una variabile age e assegnale il valore 21.
Crea una variabile hasID e assegnale il valore true.
Usa un’istruzione if per controllare se:
L'età è maggiore o uguale a 18 (age >= 18) e hasID è vero.
Se entrambe le condizioni sono vere, stampa "Access granted."
 // Risultato atteso: Access granted.
Usa else per stampare "Access denied." se almeno una condizione non è soddisfatta.
Esegui il codice per verificare che venga stampato "Access granted."
 ====================================== */
/* ======================================
 🔸 EXERCISE 3: Controllare la disponibilità di uno sconto
Crea una variabile isStudent con il valore false.
Crea una variabile isMember con il valore true.
Usa un’istruzione if con l’operatore logico || per verificare se:
isStudent è vero oppure isMember è vero.
Se almeno una delle due è vera, stampa "Discount applied."
 // Risultato atteso: Discount applied.
Altrimenti, stampa "No discount available."
Esegui il codice per vedere "Discount applied." stampato nella console.
 ====================================== */ 
 
let isLoggedIn = false;

console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

let age = 21;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

let isStudent = false;
let isMember = true;
if (isStudent || isMember) {
  console.log("Discount applied.");
} else {
  console.log("No discount available.");
}
