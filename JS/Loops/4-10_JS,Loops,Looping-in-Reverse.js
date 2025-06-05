// 4-10_JS,Loops,Looping-in-Reverse

/* ======================================
ESERCIZIO 1: Stampa i numeri da 3 a 0 in ordine decrescente usando un ciclo `for`
Scrivi uno script che stampi i numeri da 3 fino a 0 (incluso) nella console usando un ciclo `for`.

1. All'interno del ciclo `for`, dichiara una variabile chiamata `count` e inizializzala a 3.
2. Imposta la condizione per continuare il ciclo finché `count` è maggiore o uguale a 0.
3. Dopo ogni iterazione del ciclo, diminuisci il valore di `count` di 1.
4. All'interno del corpo del ciclo, stampa il valore di `count` usando `console.log()`.

Risultato atteso nella console (uno per riga):
3  
2  
1  
0

Salva le modifiche e aggiorna la pagina per eseguire lo script e verificare l’output.
====================================== */

/* ======================================
ESERCIZIO 2: Stampa solo numeri dispari in ordine decrescente da 9 a 1 usando un ciclo `for`
Scrivi uno script che stampi solo i numeri dispari in ordine decrescente da 9 a 1 (incluso) usando un ciclo `for`.

1. All'interno del ciclo `for`, dichiara una variabile chiamata `oddNum` e inizializzala a 9.
2. Imposta la condizione per continuare il ciclo finché `oddNum` è maggiore o uguale a 1.
3. Dopo ogni iterazione del ciclo, diminuisci il valore di `oddNum` di 2.
4. All'interno del corpo del ciclo, stampa il valore di `oddNum` usando `console.log()`.

Risultato atteso nella console (uno per riga):
9  
7  
5  
3  
1

Salva le modifiche e aggiorna la pagina per eseguire lo script e verificare l’output.
====================================== */

for (let count = 3; count >= 0; count--) {
  console.log(count);
}

for (let oddNum = 9; oddNum >= 0; oddNum = oddNum - 2) {
  console.log(oddNum);
}
