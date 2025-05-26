//  2-11_JS,Conditional-Statements,If-Statement
/* ======================================
 🔸 EXERCISE 1: Scrivere una semplice condizione if
 Segui le istruzioni passo per passo per creare il tuo primo blocco condizionale.
Crea una variabile chiamata weatherNice.
Assegna a weatherNice il valore true.
Scrivi una condizione if che controlla se weatherNice è vera.
Se la condizione è vera, esegui un console.log() con il seguente testo esatto:
 "Let's go outside!"
Cambia ora il valore della variabile weatherNice in false.
Esegui nuovamente il codice e osserva che il messaggio non viene stampato.
 (Non aggiungere un blocco else — solo l’if.)
====================================== */
/* ======================================
 🔸 EXERCISE 2: Usare condizioni diverse con if
 Crea tre blocchi condizionali if, ognuno con una condizione differente. Ogni blocco deve eseguire un console.log() solo se la condizione è vera.
Crea una variabile chiamata alarmRings e assegnale il valore true.
Scrivi un blocco if che controlla se alarmRings è vera.
Se è vero, stampa: "Time to wake up!"
Crea una variabile chiamata isTired con valore false.
Scrivi un blocco if che controlla se isTired è vera.
Se è vero, stampa: "Go to sleep!"
Crea una variabile chiamata hasHomework e assegnale il valore true.
Scrivi un blocco if che controlla se hasHomework è vera.
Se è vero, stampa: "Do your homework now."
Assicurati che ogni condizione sia scritta in modo indipendente usando if, e che il codice venga eseguito solo quando la condizione è vera.
====================================== */ 



let weatherNice = true;
// weatherNice = false;
if (weatherNice) {
  console.log("Let's go outside!");
}

let alarmRings = true;
if (alarmRings) {
  console.log("Time to wake up!");
}

let isTired = false;
if (isTired) {
  console.log("Go to sleep!");
}

let hasHomework = true;
if (hasHomework) {
  console.log("Do your homework now.");
}
