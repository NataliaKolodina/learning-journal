// 11-11_JS,Conditional-Statements,Review
/* ======================================
 🔸 EXERCISE 1: Creare condizioni con if, else if ed else
All’interno dello script:
Crea una variabile temperature e assegnale il valore 22.
Scrivi una condizione if che controlli se temperature è maggiore di 30. Se sì, stampa in console: "It’s hot today." // Risultato atteso: (non verrà stampato)
Aggiungi un ramo else if che controlla se temperature è minore di 15. In quel caso, imposta il contenuto su: "It’s cold today." // Risultato atteso: (non verrà stampato)
In tutti gli altri casi (else), imposta il contenuto su: "The temperature is moderate." // Risultato atteso: The temperature is moderate.
Usa l’operatore && per creare una condizione in un secondo blocco if:
Se temperature è maggiore o uguale a 20 e minore o uguale a 25, imposta un console.log() con il messaggio: "Perfect for a walk!"
Usa l’operatore || in un’altra condizione if:  // Risultato atteso: Perfect for a walk!
Se temperature è minore di 10 oppure maggiore di 35, stampa: "Extreme weather alert!"  // Risultato atteso: (non verrà stampato)
Esegui il codice per verificare che venga stampato "The temperature is moderate. Perfect for a walk!".
====================================== */
/* ======================================
 🔸 EXERCISE 2: Determinare l’azione del semaforo
Crea una variabile lightColor e assegnale il valore 'green'.
Usa una dichiarazione switch per determinare l’azione corretta:
Se lightColor è 'red', stampa "Stop!" // Risultato atteso: (non verrà stampato)
Se lightColor è 'yellow', stampa "Slow down." // Risultato atteso: (non verrà stampato)
Se lightColor è 'green', stampa "Go!" // Risultato atteso: Go!
Usa default per stampare "Caution, unknown color." // Risultato atteso: (non verrà stampato)
Assicurati di usare break dopo ogni case.
Esegui il codice per verificare che venga stampato "Go!".
====================================== */

let temperature = 22;
if (temperature > 30) {
  console.log("It’s hot today.");
} else if (temperature < 15) {
  console.log("It’s cold today.");
} else {
  console.log("The temperature is moderate.");
}

if (temperature >= 20 && temperature <= 25) {
  console.log("Perfect for a walk!");
}

if (temperature < 10 || temperature > 35) {
  console.log("Extreme weather alert!");
}

let lightColor = "green";
switch (lightColor) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Slow down.");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Caution, unknown color.");
    break;
}
