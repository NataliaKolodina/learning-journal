// 5-11_JS,Conditional-Statements,Logical-Operators
/* ======================================
 🔸 EXERCISE 1: Usare && e || per verificare condizioni multiple
 Scrivi condizioni che combinano più confronti usando operatori logici && e ||.
Crea una costante temperature e assegnale il valore 22.
Crea una costante isRaining e assegnale il valore false.
Scrivi un’istruzione if...else che verifica entrambe le condizioni:
temperature deve essere maggiore o uguale a 20
isRaining deve essere uguale a false
Se entrambe le condizioni sono vere, stampa esattamente:
 "Perfect day for a walk."
Altrimenti, stampa esattamente:
 "Maybe stay inside."
Aggiungi un secondo blocco if...else che verifica se almeno una di queste due condizioni è vera (usando ||):
temperature è maggiore di 30
isRaining è true
Se almeno una delle condizioni è vera, stampa:
 "Avoid going out now."
Altrimenti, stampa:
 "The weather is manageable."
Salva il file ed esegui il codice per verificare i messaggi stampati.
Risultati attesi:
// "Perfect day for a walk."
// "The weather is manageable.
====================================== */
/* ======================================
 🔸 EXERCISE 2: Usare ! per invertire un valore booleano
 Utilizza l’operatore ! per testare il comportamento inverso di una condizione.

Crea una costante isAvailable con il valore false.
Scrivi un blocco if...else che verifica la condizione inversa con l’operatore !:
Se !isAvailable è vera, stampa esattamente:
 "The item is currently unavailable."
Altrimenti, stampa:
 "Item in stock."
Crea una costante isWeekend con il valore true.
Scrivi un secondo blocco if...else che controlla !isWeekend:
Se !isWeekend è vera, stampa:
 "It's a weekday."
Altrimenti, stampa:
 "Weekend mode activated."
Salva le modifiche, esegui il codice e verifica ogni messaggio nella console.
Risultati attesi:
// "The item is currently unavailable."
// "Weekend mode activated."
====================================== */

const temperature = 22;
const isRaining = false;
if (temperature >= 20 && isRaining === false) {
  console.log("Perfect day for a walk.");
} else {
  console.log("Maybe stay inside.");
}
if (temperature > 30 || isRaining === true) {
  console.log("Avoid going out now.");
} else {
  console.log("The weather is manageable.");
}

const isAvailable = false;
if (!isAvailable) {
  console.log("The item is currently unavailable.");
} else {
  console.log("Item in stock.");
}
const isWeekend = true;
if (!isWeekend) {
  console.log("It's a weekday.");
} else {
  console.log("Weekend mode activated.");
}
