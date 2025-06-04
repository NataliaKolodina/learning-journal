// 7-12_JS,Arrays,The-push-Method

/* ======================================
🔸 Esercizio 1: Aggiungi elementi con .push()
1. Crea un array `pets` con const e assegna queste stringhe esattamente in questo ordine:
   'dog', 'cat', 'rabbit'.
2. Usa il metodo .push() per aggiungere queste due stringhe alla fine dell’array `pets`:
   'hamster', 'parrot'.
3. Stampa l’array `pets` aggiornato nella console.
   // Output atteso: ['dog', 'cat', 'rabbit', 'hamster', 'parrot']

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere il risultato.
====================================== */

/* ======================================
🔸 Esercizio 2: Aggiungi più elementi a un array
1. Crea un array `books` con const e inserisci questi elementi:
   '1984', 'Brave New World'.
2. Usa il metodo .push() per aggiungere questi tre libri in una sola volta alla fine dell’array `books`:
   'Fahrenheit 451', 'The Handmaid’s Tale', 'The Road'.
3. Stampa l’array `books` aggiornato nella console.
   // Output atteso: ['1984', 'Brave New World', 'Fahrenheit 451', 'The Handmaid’s Tale', 'The Road']

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere il risultato.
====================================== */

const pets = ["dog", "cat", "rabbit"];
pets.push("hamster", "parrot");
console.log(pets);

const books = ["1984", "Brave New World"];
books.push("Fahrenheit 451", "The Handmaid’s Tale", "The Road");
console.log(books);
