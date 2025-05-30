// 9-11_JS,Functions,Arrow-Functions
/* ======================================
EXERCISE 5: Arrow Function
1. Crea una funzione freccia chiamata `multiply`.
2. La funzione deve accettare due parametri `a` e `b`.
3. Deve restituire il prodotto di `a` e `b`.
4. Stampa nella console il risultato della chiamata a `multiply(4, 5)`.
   // 20
====================================== */
/* ======================================
EXERCISE 6: Arrow Function abbreviata
1. Crea una funzione freccia abbreviata chiamata `half`.
2. La funzione accetta un parametro `number`.
3. Deve restituire `number / 2` in una sola riga senza `{}` o `return`.
4. Stampa nella console il risultato della chiamata a `half(10)`.
   // 5
====================================== */

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 5));

const half = (number) => number / 2;
console.log(half(10));
