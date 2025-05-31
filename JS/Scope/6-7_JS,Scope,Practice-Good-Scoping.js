// 6-7_JS,Scope,Practice-Good-Scoping
/* ======================================
🔸 ESERCIZIO 1: Creare e utilizzare variabili con block scope all'interno di una funzione con blocco if
1. Crea una funzione chiamata checkSky.
2. All'interno di checkSky, dichiara una variabile chiamata skyColor usando let e assegnale il valore "blue".
3. Crea una costante chiamata dusk e assegnale il valore booleano true.
4. Aggiungi un'istruzione if che verifichi se dusk è true.
5. All'interno del blocco if, dichiara una nuova variabile chiamata eveningColor usando let e assegnale il valore "pink".
6. Stampa eveningColor nella console. // Risultato atteso: pink
7. Fuori dal blocco if ma dentro la funzione, stampa skyColor nella console. // Risultato atteso: blue
8. Fuori dalla funzione, prova a stampare skyColor nella console. // Risultato atteso: ReferenceError (skyColor non è definita)
9. Chiama la funzione checkSky().
====================================== */
/* ======================================
🔸 ESERCIZIO 2: Evitare l'inquinamento dello scope globale usando nomi di variabili distinti in scope separati
1. Dichiara una costante chiamata globalColor e assegnale il valore "red".
2. Crea una funzione chiamata showColors.
3. All'interno di showColors, dichiara una variabile chiamata colorMain usando let e assegnale il valore "green".
4. Aggiungi un'istruzione if che verifichi se globalColor è uguale a "red".
5. All'interno del blocco if, dichiara una variabile chiamata colorSecondary usando let e assegnale il valore "yellow".
6. Stampa colorSecondary nella console. // Risultato atteso: yellow
7. Dopo il blocco if ma ancora all'interno della funzione, stampa colorMain nella console. // Risultato atteso: green
8. Fuori dalla funzione, stampa globalColor nella console. // Risultato atteso: red
9. Chiama la funzione showColors().
====================================== */
