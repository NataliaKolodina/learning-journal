// 3-12_JS,Arrays,Accessing-Elements
/* ======================================  
🔸 ESERCIZIO 1: Accedi agli elementi di un array e stampali  
1. Crea una variabile chiamata `cities` e assegnale un array con queste stringhe esatte: 'Rome', 'Paris', 'Berlin'.  
2. Accedi al primo elemento dell'array `cities` e memorizzalo in una variabile chiamata `firstCity`.  
3. Accedi all'ultimo elemento dell'array `cities` e memorizzalo in una variabile chiamata `lastCity`.  
4. Stampa `firstCity` nella console (dovrebbe stampare "Rome").  
5. Stampa `lastCity` nella console (dovrebbe stampare "Berlin").  
Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere l'output.  
====================================== */
/* ======================================  
🔸 ESERCIZIO 2: Accedi ai caratteri in una stringa  
1. Crea una variabile chiamata `helloString` e assegnale la stringa esatta: 'Hello World'.  
2. Accedi al carattere all'indice 6 della stringa `helloString` usando la notazione con parentesi quadre e memorizzalo in una variabile chiamata `charAtSix`.  
3. Stampa `charAtSix` nella console (dovrebbe stampare "W").  

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere l'output.  
====================================== */

const cities = ['Rome', 'Paris', 'Berlin'];
const firstCity = cities[0];
const lastCity = cities[2];
console.log(firstCity);
console.log(lastCity);

const helloString = 'Hello World';
const charAtSix = helloString[6];
console.log(charAtSix);