// 3-11_JS,Advanced-Objects,Arrow-Functions-and-this
/* ======================================
ESERCIZIO 1: Definire metodi con `this`
1. Crea un oggetto chiamato `car` con le seguenti proprietà:
   - `brand`: 'Fiat'
   - `model`: 'Punto'
   - `start`: un metodo che stampa in console: "Fiat Punto is starting"
     (usa `this.brand` e `this.model` per formare la frase).
2. Esegui `car.start()` per verificare il risultato.
   // Risultato atteso: Fiat Punto is starting

ESERCIZIO 2: Effetto delle arrow function
1. Aggiungi una nuova proprietà all'oggetto `car` chiamata `engineStatus` con valore 'ready'.
2. Aggiungi un nuovo metodo `checkStatus` usando una arrow function che prova a stampare:
   "`Engine is` + this.engineStatus".
3. Esegui `car.checkStatus()` e osserva il risultato.
   // Risultato atteso: Engine is undefined
4. Spiega brevemente in un commento perché il valore è `undefined` invece di 'ready'.
====================================== */

const car = {
  brand: "Fiat",
  model: "Punto",
  engineStatus: "ready",
  start() {
    console.log(`${this.brand} ${this.model} is starting`);
  },
  checkStatus: () => {
    console.log(`Engine is ` + this.engineStatus);
  },
};
car.start();
car.checkStatus();
// In checkStatus, `this` does not refer to the `car` object because it's an arrow function.
// Arrow functions do not have their own `this`; they inherit it from the surrounding scope.
// As a result, `this.engineStatus` is undefined or refers to the wrong context.
