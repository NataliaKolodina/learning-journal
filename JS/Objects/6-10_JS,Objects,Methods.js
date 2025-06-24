// 6-10_JS,Objects,Methods
/* ======================================
ESERCIZIO: Creare e invocare un metodo su un oggetto

1. Crea una costante `securityBot` e assegnale un oggetto con le seguenti proprietà:
   - `model`: con valore `'Guardian-X'`
   - `alert`: un metodo che stampa il messaggio `"Intruder detected! Activating defense mode."` usando `console.log()`.
2. Invoca il metodo `alert` dell’oggetto `securityBot`.
   // Risultato atteso nella console:
   // "Intruder detected! Activating defense mode."
====================================== */

/* ======================================
ESERCIZIO: Aggiungere un metodo a un oggetto esistente

1. Crea una costante `drone` e assegnale un oggetto con la proprietà:
   - `id`: con valore `'DR-22'`
2. Aggiungi una nuova proprietà chiamata `fly` a `drone`, assegnandole un metodo (utilizzando la sintassi ES6) che stampa il messaggio `"Drone in flight. ID: DR-22"` usando `console.log()`.
3. Invoca il metodo `fly` dell’oggetto `drone`.
   // Risultato atteso nella console:
   // "Drone in flight. ID: DR-22"
====================================== */

const securityBot = {
  model: "Guardian-X",
  alert() {
    console.log("Intruder detected! Activating defense mode.");
  },
};
securityBot.alert();

const drone = {
  id: "DR-22",
  fly() {
    console.log("Drone in flight. ID: DR-22");
  },
};
drone.fly();
