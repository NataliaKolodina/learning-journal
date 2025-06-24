// 8-10_JS,Objects,Pass-By-Reference
/* ======================================
ESERCIZIO: Modifica una proprietà di un oggetto passato a una funzione

1. Crea una costante `robot` e assegnale un oggetto con le seguenti proprietà:
   - `status`: con valore `'offline'`
   - `battery`: con valore `15`
2. Crea una funzione `activateRobot` che accetta un parametro `machine`.
   All'interno della funzione, modifica la proprietà `status` di `machine` in `'active'`.
3. Chiama `activateRobot` passando `robot` come argomento.
4. Stampa nella console il valore della proprietà `status` di `robot`.
   // Risultato atteso nella console:
   // "active"
====================================== */

/* ======================================
ESERCIZIO: Tentativo di riassegnazione di oggetto all'interno di una funzione

1. Crea una variabile `vehicle` con `let` e assegnale un oggetto con queste proprietà:
   - `type`: con valore `'truck'`
   - `inUse`: con valore `true`
2. Crea una funzione `replaceVehicle` che accetta un parametro `machine`.
   All'interno della funzione, assegna a `machine` un nuovo oggetto con:
   - `type`: con valore `'drone'`
   - `inUse`: con valore `false`
   Stampa `machine` nella console all'interno della funzione.
3. Chiama `replaceVehicle` passando `vehicle` come argomento.

4. Dopo la chiamata, stampa nella console l’oggetto `vehicle`.
   // Risultato atteso nella console:
   // All’interno della funzione: { type: "drone", inUse: false }
   // Dopo la funzione: { type: "truck", inUse: true }
====================================== */


