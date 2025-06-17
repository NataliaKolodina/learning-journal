// 3-9_JS,Iterators,The-map-Method
/* ======================================
ESERCIZIO 1: Usare .map() per modificare i valori

1. Crea un array chiamato `prices` con i seguenti numeri: 5, 10, 15.
2. Crea una costante `discountedPrices` e assegna il risultato di `.map()` chiamato su `prices`.
3. La funzione freccia deve restituire ogni elemento diviso per 5.
   // Risultato atteso per discountedPrices: [1, 2, 3]
4. Stampa sia `prices` che `discountedPrices` nella console.

Salva il file, esegui il codice e verifica l'output.
// ====================================== */

/* ======================================
ESERCIZIO 2: Creare un array trasformato da stringhe

1. Crea un array chiamato `foods` con i seguenti elementi: "apple", "banana", "carrot".
2. Crea una costante `shoutedFoods` e assegna il risultato di `.map()` chiamato su `foods`.
3. La funzione freccia deve restituire ogni stringa in maiuscolo.
   // Risultato atteso per shoutedFoods: ["APPLE", "BANANA", "CARROT"]
4. Stampa sia `foods` che `shoutedFoods` nella console.

Salva il file, esegui il codice e verifica l'output.
====================================== */

const prices = [5, 10, 15];
const discountedPrices = prices.map((price) => {
  return price / 5;
});
console.log(prices);
console.log(discountedPrices);

const foods = ["apple", "banana", "carrot"];
const shoutedFoods = foods.map((food) => {
  return food.toLocaleUpperCase();
});
console.log(foods);
console.log(shoutedFoods);
