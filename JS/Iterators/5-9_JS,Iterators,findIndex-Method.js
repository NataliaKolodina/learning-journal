// 5-9_JS,Iterators,findIndex-Method
/* ======================================
ESERCIZIO 1: Trovare l'indice della prima parola lunga

1. Crea un array chiamato `tools` con i seguenti valori: "pen", "notebook", "eraser", "ruler", "sharpener", "tape".
2. Crea una costante `longToolIndex` e assegna il risultato di `.findIndex()` chiamato su `tools`.
3. La funzione freccia deve restituire `true` per le parole con più di 6 lettere.
   // Risultato atteso per longToolIndex: 1
4. Stampa `longToolIndex` nella console.

Salva il file, esegui il codice e verifica l'output.
====================================== */

/* ======================================
ESERCIZIO 2: Nessun elemento soddisfa la condizione

1. Crea un array chiamato `ages` con i seguenti numeri: 3, 7, 12, 15, 20, 25.
2. Crea una costante `overHundredIndex` e assegna il risultato di `.findIndex()` chiamato su `ages`.
3. La funzione freccia deve restituire `true` per i numeri maggiori di 100.
   // Risultato atteso per overHundredIndex: -1
4. Stampa `overHundredIndex` nella console.

Salva il file, esegui il codice e verifica l'output.
====================================== */

const tools = ["pen", "notebook", "eraser", "ruler", "sharpener", "tape"];
const longToolIndex = tools.findIndex((item) => item.length > 6);
console.log(longToolIndex);

const ages = [3, 7, 12, 15, 20, 25];
const overHundredIndex = ages.findIndex((num) => num > 100);
console.log(overHundredIndex);
