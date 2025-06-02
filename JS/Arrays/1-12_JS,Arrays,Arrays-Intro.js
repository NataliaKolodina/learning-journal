// 1-12_JS,Arrays,Arrays-Intro
/* ======================================  
🔸 ESERCIZIO 1: Crea e mostra un array  
1. Crea un array JavaScript chiamato `favoriteFoods` contenente esattamente queste tre stringhe:  
   'pizza', 'pasta', 'gelato'  
2. Usa `console.log()` per stampare l'intero array `favoriteFoods` nella console.  
3. Poi stampa il secondo elemento dell'array (ricorda, gli array partono dall'indice 0). favoriteFoods[index]
4. Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere l'intero array e il secondo elemento stampati.  
// Output previsto:  
// ['pizza', 'pasta', 'gelato']  
// pasta  
====================================== */
/* ======================================  
🔸 ESERCIZIO 2: Modifica ed espandi un array  
1. Crea un array chiamato `weekDays` con queste stringhe esatte e in questo ordine:  
   'Monday', 'Tuesday', 'Wednesday'  
2. Aggiungi la stringa 'Thursday' come ultimo elemento dell'array `weekDays` usando un metodo degli array .push().  
3. Cambia il primo elemento dell'array in 'Sunday' assegnando direttamente all'indice 0.  
4. Usa `console.log()` per stampare l'intero array modificato `weekDays`.  
5. Salva le modifiche, aggiorna la pagina ed esegui il codice per controllare l'array aggiornato.  
// Output previsto:  
// ['Sunday', 'Tuesday', 'Wednesday', 'Thursday']  
====================================== */

const favoriteFoods = ["pizza", "pasta", "gelato"];
console.log(favoriteFoods);
console.log(favoriteFoods[1]);

const weekDays = ["Monday", "Tuesday", "Wednesday"];
weekDays.push("Thursday");
weekDays[0] = "Sunday";
console.log(weekDays);
