// 2-7_JS,Scope,Blocks-and-Scope
/* ======================================
🔸 ESERCIZIO 1: Usa un blocco if per creare uno scope locale.
1. Dichiara una variabile timeOfDay e assegnale il valore "evening".
2. Crea una condizione if che verifichi se timeOfDay è uguale a "evening".
3. All’interno del blocco if, esegui queste azioni:
- Dichiara una costante skyColor e assegnale il valore "orange".
- Stampa skyColor nella console. // Output atteso: orange
4. Al di fuori del blocco if, prova a stampare skyColor nella console. // Output atteso: Errore - skyColor non è definita
5. Esegui il codice e verifica gli output nella console.
====================================== */
/* ======================================
🔸 ESERCIZIO 2: Usa blocchi di funzione e blocchi condizionali con scope indipendenti
1. Crea una funzione chiamata weatherCheck.
2. All’interno della funzione weatherCheck, esegui queste operazioni:
- Dichiara una variabile temperature e assegnale il valore 18.
- Crea un blocco if che verifica se temperature è maggiore o uguale a 15.
- All’interno del blocco if, dichiara una variabile message e assegnale il valore "Warm weather".
- Stampa message nella console. // Output atteso: Warm weather
3. Al di fuori del blocco if ma ancora dentro la funzione, prova a stampare message nella console. // Output atteso: Errore - message is not defined
4. Al di fuori della funzione weatherCheck, prova a stampare temperature nella console. // Output atteso: Errore - temperature is not defined
5.Chiama la funzione weatherCheck nel codice globale.
6. Esegui il codice e verifica gli output nella console.
====================================== */

const timeOfDay = "evening";
if (timeOfDay === "evening") {
  const skyColor = "orange";
  console.log(skyColor);
}
// console.log(skyColor);

function weatherCheck() {
  const temperature = 18;
  if (temperature >= 15) {
    const message = "Warm weather";
    console.log(message);
  }
  console.log(message);
}
console.log(temperature);
weatherCheck();
