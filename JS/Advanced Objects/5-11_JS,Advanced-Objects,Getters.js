// 5-11_JS,Advanced-Objects,Getters
/* ======================================
ESERCIZIO 1: Creare un getter per nome completo
1. Crea un oggetto `employee` con due proprietà: - `_firstName`: 'Sara' - `_lastName`: 'Rossi'
2. Aggiungi un getter `fullName` che restituisce: - "Sara Rossi" se entrambi i nomi esistono - "Nome o cognome mancante." altrimenti
3. Esegui `employee.fullName` e verifica il risultato. // Risultato atteso: Sara Rossi
4. Cancella la proprietà `_lastName` usando `delete`.
5. Esegui di nuovo `employee.fullName`. // Risultato atteso: Nome o cognome mancante.
====================================== */

/* ======================================
ESERCIZIO 2: Getter con controllo sulla lunghezza
1. Crea un oggetto `book` con una proprietà: - `_title`: 'Il Signore degli Anelli'
2. Aggiungi un getter `shortTitle` che restituisce: - 'Titolo troppo lungo.' se la lunghezza di `_title` è maggiore di 20 caratteri - altrimenti restituisci `_title`
3. Esegui `book.shortTitle`. // Risultato atteso: Titolo troppo lungo.
4. Cambia `_title` in 'Dune'
5. Esegui di nuovo `book.shortTitle`. // Risultato atteso: Dune
====================================== */


