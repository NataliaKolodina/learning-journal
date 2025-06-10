// 3-4_JS,Higher-Order-Functions,Functions-as-Parameters

/* ======================================
ESERCIZIO 1: Creare una funzione di ordine superiore

1. Definisci una funzione chiamata `executeCallback` che accetta un parametro chiamato `callback`.
2. All'interno di `executeCallback`, invoca la funzione `callback`.
3. `executeCallback` deve restituire la stringa: "Ho appena eseguito [nome funzione callback]!" utilizzando la proprietà `.name` del callback.
   // Esempio: se la callback si chiama `sayHello`, restituisce "Ho appena eseguito sayHello!"

4. Definisci una funzione chiamata `sayHello` che ritorna la stringa "Ciao dal callback!".
5. Chiama la funzione `executeCallback` passando `sayHello` come argomento.
   // Risultato atteso: "Ho appena eseguito sayHello!"

Salva il file, esegui il codice e verifica la stampa in console o nel risultato.

// ====================================== */

/* ======================================
ESERCIZIO 2: Funzione anonima come callback

1. Chiama la funzione `executeCallback` definita nell'esercizio precedente, passando come argomento una funzione anonima che stampa in console i numeri da 1 a 5.
   // Risultato atteso in console: 1 2 3 4 5 (ognuno su una riga)

2. Osserva cosa restituisce `executeCallback` quando viene passata questa funzione anonima.
   // Risultato atteso: "Ho appena eseguito anonymous!"

Salva il file, esegui il codice e verifica i risultati.
====================================== */
