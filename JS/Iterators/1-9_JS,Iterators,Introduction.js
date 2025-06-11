// 1-9_JS,Iterators,Introduction
/* ======================================
ESERCIZIO 1: Modificare ogni elemento con .map()
1. Crea un array `numbers` con i valori sopra indicati.
2. Usa `.map()` per creare un nuovo array in cui ogni numero è raddoppiato.
3. Salva il risultato nella costante `doubledNumbers`.
4. Stampa `doubledNumbers` nella console.

Esegui il codice e verifica che i numeri raddoppiati siano stampati correttamente.
====================================== */

/* ======================================
ESERCIZIO 2: Filtrare elementi con .filter()
1. Crea un array `ages` con i valori sopra indicati.
2. Usa `.filter()` per ottenere un nuovo array con solo i valori maggiori o uguali a 18.
3. Salva il risultato nella costante `adultAges`.
4. Stampa `adultAges` nella console.

Esegui il codice e verifica che vengano mostrati solo i valori che rappresentano età adulte.
====================================== */

const numbers = [2, 4, 6];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const ages = [12, 17, 18, 24, 15];
const adultAges = ages.filter((age) => age >= 18);
console.log(adultAges);
