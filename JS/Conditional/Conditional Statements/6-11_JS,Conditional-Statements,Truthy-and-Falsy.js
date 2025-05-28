// 6-11_JS,Conditional-Statements,Truthy-and-Falsy
/* ======================================
 🔸 EXERCISE 1: Verificare il valore truthy di una variabile
 Scrivi una struttura condizionale che controlla se una variabile contiene un valore truthy.
Crea una costante chiamata userMessage e assegnale il valore "Hello!".
Scrivi una struttura if...else che controlla semplicemente userMessage nella condizione (non confrontarla con nessun valore specifico).
Se la condizione è vera, stampa:
 "User has sent a message."
Esegui il codice ora per vedere il primo risultato.
Sostituisci il valore di userMessage con una stringa vuota: "".
Salva le modifiche ed esegui di nuovo il file per vedere il secondo risultato.
Risultati attesi:
//  "User has sent a message."
// "No message received."
====================================== */
/* ======================================
 🔸 EXERCISE 2: Controllare valori falsy comuni
Crea una costante chiamata valueZero e assegnale il valore 0.
Crea una costante chiamata emptyString e assegnale una stringa vuota: "".
Crea una costante chiamata valueNull e assegnale il valore null.
Crea una costante chiamata valueUndefined e assegnale il valore undefined.
Crea una costante chiamata valueNaN e assegnale il valore NaN.
Per ogni costante, scrivi una struttura if...else:
Nella condizione dell’if, scrivi solo il nome della costante.
Nel blocco if, stampa "Truthy.".
Nel blocco else, stampa "Falsy.".
Esegui il codice e osserva i risultati per ogni valore.
Risultati attesi:
// "Falsy."
// "Falsy."
// "Falsy."
// "Falsy."
// "Falsy."
====================================== */

// const userMessage = 'Hello!';
const userMessage = "";
if (userMessage) {
  console.log("User has sent a message.");
} else {
  console.log("No message received.");
}

const valueZero = 0;
const emptyString = "";
const valueNull = null;
const valueUndefined = undefined;
const valueNaN = NaN;
if (valueZero) {
  console.log("Truthy.");
} else {
  console.log("Falsy.");
}
if (emptyString) {
  console.log("Truthy.");
} else {
  console.log("Falsy.");
}
if (valueNull) {
  console.log("Truthy.");
} else {
  console.log("Falsy.");
}
if (valueUndefined) {
  console.log("Truthy.");
} else {
  console.log("Falsy.");
}
if (valueNaN) {
  console.log("Truthy.");
} else {
  console.log("Falsy.");
}
