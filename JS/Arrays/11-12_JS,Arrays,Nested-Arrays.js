// 11-12_JS,Arrays,Nested-Arrays

/* ======================================
🔸 Esercizio 1: Crea e accedi agli array annidati

1. Crea un array `matrix` con const contenente esattamente due array annidati:
   - Il primo array annidato contiene i numeri 5 e 10.
   - Il secondo array annidato contiene i numeri 15, 20 e 25.
2. Stampa nella console l’intero secondo array annidato dentro `matrix`.
   // Output atteso: [15, 20, 25]
3. Stampa nella console il primo elemento del primo array annidato dentro `matrix`.
   // Output atteso: 5

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere il risultato.
====================================== */

/* ======================================
🔸 Esercizio 2: Accedi e modifica gli array annidati

1. Usando l’array `matrix` creato nell’Esercizio 1, fai quanto segue:
2. Accedi al terzo elemento del secondo array annidato e stampalo nella console.
   // Output atteso: 25
3. Usa la notazione a parentesi quadre per modificare il secondo elemento del primo array annidato, impostandolo al numero 50.
4. Stampa l’intero array `matrix` nella console per verificare la modifica.
   // Output atteso: [[5, 50], [15, 20, 25]]

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere il risultato.
====================================== */

const matrix = [
  [5, 10],
  [15, 20, 25],
];
console.log(matrix[1]);
console.log(matrix[0][0]);

console.log(matrix[1][2]);
matrix[0][1] = 50;
console.log(matrix);
