// 2-12_JS,Arrays,Create-an-Array
/* ======================================  
🔸 ESERCIZIO 1: Crea e stampa un array con tipi di dati diversi  
1. Crea una variabile chiamata `mixedData` e assegnale un array con esattamente tre elementi:  
   - La stringa "apple"  
   - Il numero 42  
   - Il booleano `true`  
2. Usa `console.log()` per stampare l'intero array `mixedData`.  
3. Salva le modifiche, aggiorna la pagina ed esegui il codice per controllare l'output.  
// Output previsto:  
// ["apple", 42, true]  
// true  
====================================== */
/* ======================================  
🔸 ESERCIZIO 2: Memorizza un array in una variabile e accedi agli elementi  
1. Dichiara una variabile chiamata `studentNames` e assegnale un array letterale contenente queste stringhe esatte e in questo ordine:  
   "Anna", "Luca", "Maria"  
2. Usa `console.log()` per stampare il primo elemento di `studentNames`.  
3. Usa `console.log()` per stampare la lunghezza dell'array `studentNames`.  
4. Salva le modifiche, aggiorna la pagina ed esegui il codice per verificare l'output.  
// Output previsto:  
// Anna  
// 3  
====================================== */

const mixedData = ["apple", 42, true];
console.log(mixedData);
console.log(mixedData[2]);

const studentNames = ["Anna", "Luca", "Maria"];
console.log(studentNames[0]);
console.log(studentNames.length);
