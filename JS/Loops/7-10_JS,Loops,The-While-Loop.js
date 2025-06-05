// 7-10_JS,Loops,The-While-Loop

/* ======================================
ESERCIZIO 1: Stampa i numeri da 5 a 1 usando un ciclo while
1. Dichiara una variabile chiamata counter prima del ciclo e inizializzala a 5.
2. Scrivi un ciclo while che continui finché counter è maggiore o uguale a 1.
3. All’interno del ciclo, stampa il valore di counter nella console.
4. Dopo la stampa, diminuisci il valore di counter di 1.
Output atteso nella console:
5
4
3
2
1

Salva le modifiche, aggiorna la pagina ed esegui il codice per verificare l’output.
====================================== */

/* ======================================
ESERCIZIO 2: Stampa i numeri pari da 2 a 10 usando un ciclo while
1. Dichiara una variabile chiamata evenCounter prima del ciclo e inizializzala a 2.
2. Scrivi un ciclo while che continui finché evenCounter è minore o uguale a 10.
3. All’interno del ciclo, stampa il valore di evenCounter nella console.
4. Dopo la stampa, aumenta il valore di evenCounter di 2.
Output atteso nella console:
2
4
6
8
10

Salva le modifiche, aggiorna la pagina ed esegui il codice per verificare l’output.
====================================== */

let counter = 5;
while (counter >= 1) {
  console.log(counter);
  counter--;
}

let evenCounter = 2;
while (evenCounter <= 10) {
  console.log(evenCounter);
  evenCounter += 2;
}
