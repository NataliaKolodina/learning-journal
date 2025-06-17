// 8-9_JS,Iterators,Choose-the-Right-Iterator
/* ======================================
ESERCIZIO 1: Stampa ogni elemento con .forEach()
Hai un array chiamato colors che contiene alcuni nomi di colori.
Usa il metodo .forEach() per stampare ogni colore nella console uno per uno.
Alla fine, assicurati che nella console vengano mostrati tutti i colori, uno in ogni riga.
Per esempio, se colors è ['rosso', 'verde', 'blu'], la console deve mostrare:
rosso
verde
blu
====================================== */

// const colors = ['rosso', 'verde', 'blu'];

// Usa .forEach() per stampare ogni elemento dell'array colors

// Esegui il codice e controlla che tutti i colori siano stampati uno per riga.

/* ======================================
ESERCIZIO 2: Somma tutti i numeri con .reduce()
Hai un array chiamato scores che contiene diversi punteggi numerici.
Usa il metodo .reduce() per calcolare la somma totale dei punteggi.
Salva il risultato in una variabile chiamata totalScore.
Stampa nella console totalScore con il risultato della somma.
Per esempio, se scores è [10, 20, 30], totalScore deve essere 60.
====================================== */

// const scores = [10, 20, 30];

// Usa .reduce() per sommare tutti i valori di scores e salva il risultato in totalScore

// Stampa totalScore (deve mostrare la somma di tutti i punteggi)

// Esegui il codice e verifica che totalScore sia corretto.

const colors = ["rosso", "verde", "blu"];
colors.forEach((color) => console.log(color));

const scores = [10, 20, 30];
const totalScore = scores.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(totalScore);
