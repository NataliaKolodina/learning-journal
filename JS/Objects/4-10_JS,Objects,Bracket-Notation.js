// 4-10_JS,Objects,Bracket-Notation
/* ======================================
ESERCIZIO: Accedere a proprietà con notazione tra parentesi quadre

1. Crea una costante chiamata `device` e assegnale un oggetto con le seguenti proprietà:
   - `'Battery Level'`: con valore `85`
   - `'Wi-Fi'`: con valore `true`
2. Crea una costante `batteryStatus` e assegna il valore della proprietà `'Battery Level'` usando la notazione tra parentesi quadre.
3. Stampa `batteryStatus` usando `console.log()`.
   // Risultato atteso nella console:
   // 85
4. Crea una costante `wifiStatus` e assegna il valore della proprietà `'Wi-Fi'` usando la notazione tra parentesi quadre.
5. Stampa `wifiStatus` usando `console.log()`.
   // Risultato atteso nella console:
   // true
====================================== */

/* ======================================
ESERCIZIO: Accedere a una proprietà tramite variabile e notazione tra parentesi quadre

1. Crea una costante chiamata `book` e assegnale un oggetto con le seguenti proprietà:
   - `title`: con valore `'1984'`
   - `author`: con valore `'George Orwell'`
2. Crea una variabile `keyToAccess` e assegnale la stringa `'author'`.
3. Crea una costante `bookAuthor` e assegna il valore della proprietà corrispondente alla variabile `keyToAccess` dell’oggetto `book`, usando la notazione tra parentesi quadre.
4. Stampa `bookAuthor` usando `console.log()`.
   // Risultato atteso nella console:
   // 'George Orwell'
====================================== */

const device = {
  "Battery Level": 85,
  "Wi-Fi": true,
};
const batteryStatus = device["Battery Level"];
console.log(batteryStatus);
const wifiStatus = device["Wi-Fi"];
console.log(wifiStatus);

const book = {
  title: 1984,
  author: "George Orwell",
};
const keyToAccess = "author";
const bookAuthor = book[keyToAccess];
console.log(bookAuthor);
