// 1-7_JS,Scope,Scope-Intro
/* ======================================
🔸ESERCIZIO 1: Verifica dell'accesso a variabili globali e locali
1. Dichiara una variabile globale let sky = "stars".
2. Crea una funzione chiamata cityView che:
   - Dichiara una variabile locale let view = "river".
   - Stampa nel console log il valore della variabile view. // Output atteso: river
   - Stampa nel console log il valore della variabile sky. // Output atteso: stars
3. Al di fuori della funzione, prova a stampare nel console log la variabile view. // Output atteso: Errore - view is not defined
4. Esegui il codice e verifica gli output nella console.
====================================== */
/* ======================================
🔸 ESERCIZIO 2: Scope e ridefinizione di variabili
1. Definisci una variabile globale let animal = "cat".
2. Crea una funzione changeAnimal che:
   - Dichiara una variabile locale con lo stesso nome let animal = "dog".
   - Stampa nel console log il valore della variabile animal. // Output atteso: dog
3. Al di fuori della funzione, stampa il valore della variabile animal. // Output atteso: cat
4. Chiama la funzione changeAnimal().
5. Esegui il codice e controlla nella console che gli output siano corretti e distinti per scope.
====================================== */

let sky = "stars";
function cityView() {
  let view = "river";
  console.log(view);
  console.log(sky);
}
// console.log(view);
cityView();

let animal = "cat";
function changeAnimal() {
  let animal = "dog";
  console.log(animal);
}
console.log(animal);
changeAnimal();
