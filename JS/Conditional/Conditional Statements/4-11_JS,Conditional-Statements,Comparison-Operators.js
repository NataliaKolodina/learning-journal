// 4-11_JS,Conditional-Statements,Comparison-Operators
/* ======================================
 🔸 EXERCISE 1: Confrontare numeri con operatori di confronto
 Scrivi una serie di confronti numerici utilizzando tutti gli operatori previsti nella lezione.
Crea una costante chiamata a e assegnale il valore 25.
Crea una costante chiamata b e assegnale il valore 30.
Verifica se a è minore di b e stampa il risultato.
Verifica se b è maggiore di a e stampa il risultato.
Verifica se a è minore o uguale a 25 e stampa il risultato.
Verifica se b è maggiore o uguale a 35 e stampa il risultato.
Verifica se a è uguale a 25 usando l’operatore di identità (tre segni uguali) e stampa il risultato. 
Verifica se b è diverso da 25 e stampa il risultato.
Salva il file JavaScript ed esegui il codice per vedere i risultati nel terminale o nella console del browser. 
====================================== */
/* ======================================
 🔸 EXERCISE 2: Confrontare stringhe con operatori di confronto 
 Applica gli operatori === e !== su valori testuali per comprendere come si comportano con le stringhe. 
Crea una costante chiamata fruit1 con il valore "apple".
Crea una costante chiamata fruit2 con il valore "orange".
Verifica se fruit1 è uguale a "apple" usando l’operatore di identità e stampa il risultato.
Verifica se fruit2 è diverso da "apple" e stampa il risultato.
Crea una terza costante chiamata fruit3 con il valore "Apple" (con la "A" maiuscola).
Verifica se fruit1 è uguale a fruit3 usando l’operatore === e stampa il risultato.
Nota: Rispetta esattamente maiuscole e minuscole nei confronti, poiché JavaScript fa distinzione tra lettere maiuscole e minuscole.
Salva le modifiche, esegui il codice e controlla i risultati stampati.
====================================== */

const a = 25;
const b = 30;
if (a < b) {
  console.log("a è minore di b");
}
if (b > a) {
  console.log("b è maggiore di a");
}
if (a <= 25) {
  console.log("a è minore o uguale a 25");
}
if (b >= 35) {
  console.log("b è maggiore o uguale a 35");
}
if (a === 25) {
  console.log("a è uguale a 25");
}
if (b !== 25) {
  console.log("b è diverso da 25");
}

const fruit1 = "apple";
const fruit2 = "orange";
if (fruit1 === "apple") {
  console.log('fruit1 è uguale a "apple"');
}
if (fruit2 !== "apple") {
  console.log('fruit2 è diverso da "apple"');
}
const fruit3 = "Apple";
if (fruit1 === fruit3) {
  console.log("fruit1 è uguale a fruit3");
}
