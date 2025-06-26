// 2-11_JS,Advanced-Objects,The-this-Keyword
/* ======================================
ESERCIZIO 1: Utilizzare `this` nei metodi di un oggetto

1. Crea un oggetto chiamato `robot`.
2. Aggiungi una proprietà `model` con valore 'T-850'.
3. Aggiungi una proprietà `status` con valore 'online'.
4. Aggiungi un metodo `reportStatus` che stampa:
   // Risultato atteso: "Model T-850 is currently online"
   (usa `this.model` e `this.status`).
5. Chiama `robot.reportStatus()` per stampare lo stato iniziale.
====================================== */

/* ======================================
ESERCIZIO 2: Modificare proprietà con `this` in un metodo

1. All’interno dello stesso oggetto `robot`, aggiungi un metodo `shutDown`.
2. All’interno di `shutDown`, imposta la proprietà `status` a 'offline' usando `this.status`.
3. Chiama `robot.shutDown()` per eseguire la modifica.
4. Chiama di nuovo `robot.reportStatus()` per verificare che lo stato sia cambiato.
   // Risultato atteso: "Model T-850 is now offline"
Salva le modifiche, esegui il codice e controlla in console i tre risultati attesi.
====================================== */


