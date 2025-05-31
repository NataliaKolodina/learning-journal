// 5-7_JS,Scope,Scope-Pollution
/* ======================================
🔸 𝗘𝘀𝗲𝗿𝗰𝗶𝘇𝗶𝗼 𝟭: 𝗘𝘃𝗶𝘁𝗮𝗿𝗲 𝗹'𝗶𝗻𝗾𝘂𝗶𝗻𝗮𝗺𝗲𝗻𝘁𝗼 𝗱𝗲𝗹𝗹𝗼 𝘀𝗰𝗼𝗽𝗲 𝗱𝗶𝗰𝗵𝗶𝗮𝗿𝗮𝗻𝗱𝗼 𝘃𝗮𝗿𝗶𝗮𝗯𝗶𝗹𝗶 𝗹𝗼𝗰𝗮𝗹𝗺𝗲𝗻𝘁𝗲
1. Dichiara una costante chiamata `userName` e assegnale il valore `"Alice"`.
2. Crea una funzione chiamata `displayUserName`.
3. All’interno della funzione, crea una variabile chiamata `userName` usando `let` e assegnale il valore `"Bob"`.
4. Stampa la variabile `userName` all’interno della funzione. // Risultato atteso: Bob
5. Al di fuori della funzione, stampa la costante `userName`. // Risultato atteso: Alice
6. Chiama la funzione `displayUserName`.
====================================== */
/* ======================================
🔸 𝗘𝘀𝗲𝗿𝗰𝗶𝘇𝗶𝗼 𝟮: 𝗥𝗶𝗰𝗼𝗻𝗼𝘀𝗰𝗲𝗿𝗲 𝗹’𝗶𝗻𝗾𝘂𝗶𝗻𝗮𝗺𝗲𝗻𝘁𝗼 𝗱𝗲𝗹𝗹𝗼 𝘀𝗰𝗼𝗽𝗲 𝗰𝗮𝘂𝘀𝗮𝘁𝗼 𝗱𝗮 𝘂𝗻𝗮 𝗺𝗮𝗻𝗰𝗮𝘁𝗮 𝗱𝗶𝗰𝗵𝗶𝗮𝗿𝗮𝘇𝗶𝗼𝗻𝗲
1. Dichiara una variabile chiamata `count` con valore `10` usando `let`.
2. Crea una funzione chiamata `incrementCount`.
3. All’interno della funzione, assegna a `count` il valore `20` **senza usare let o const**.
4. Stampa `count` dentro la funzione. // Risultato atteso: 20
5. Chiama la funzione `incrementCount`.
6. Dopo la chiamata, stampa `count` fuori dalla funzione. // Risultato atteso: 20
7. Correggi l’errore dichiarando una nuova variabile `count` all’interno della funzione usando `let`, con valore `30`.
8. Stampa nuovamente `count` dentro la funzione. // Risultato atteso: 30
9. Stampa `count` fuori dalla funzione. // Risultato atteso: 10
====================================== */

const userName = "Alice";
function displayUserName() {
  let userName = "Bob";
  console.log(userName);
}
console.log(userName);
displayUserName();

let count = 10;
function incrementCount() {
  let count = 30;
  console.log(count);
}
incrementCount();
console.log(count);
