// 7-11_JS,Conditional-Statements,Truthy-and-Falsy-Assignment
/* ======================================
 🔸 EXERCISE 1: Assegnare un valore predefinito con if...else
Crea una variabile userInput e assegnale una stringa vuota.
Crea una variabile customName senza assegnarle alcun valore.
Scrivi un’istruzione if che controlla se userInput ha un valore truthy.
All’interno del blocco if, assegna a customName il valore di userInput.
Scrivi un blocco else dove assegni a customName la stringa 'Guest'.
Usa console.log(customName) per stampare il valore finale.
Salva le modifiche, esegui il codice e verifica il risultato. // Risultato atteso: Guest
====================================== */
/* ======================================
 🔸 EXERCISE 2: Usare l’operatore || per una valutazione abbreviata
Crea una variabile nickname e assegnale la stringa vuota.
Crea una nuova variabile finalName e assegnale il risultato della valutazione:
A sinistra metti nickname
A destra metti la stringa 'Anonymous'
Usa l’operatore || per assegnare la prima opzione truthy
Stampa il valore di finalName con console.log.
Salva le modifiche, esegui il codice e verifica il risultato.  Risultato atteso: // Anonymous
====================================== */

let userInput = "";
let customName;
if (userInput) {
  customName = userInput;
} else {
  customName = "Guest";
}
console.log(customName);

let nickname = "";
let finalName = nickname || "Anonymous";
console.log(finalName);
