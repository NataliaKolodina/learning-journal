// 1-10_JS,Objects,Introduction
/* ======================================
ESERCIZIO: Gestione di un oggetto 'car'

1. Crea un oggetto `car` con le seguenti proprietà:
   - brand: 'Ferrari'
   - year: 2022
   - startEngine: funzione che stampa "Motore acceso!"
2. Assegna la proprietà `year` a una variabile `carYear` usando la notazione a punti.
   - Stampa `carYear` in console.
3. Aggiungi una nuova proprietà `color` usando la notazione con parentesi quadre. Il valore deve essere 'rosso'.
4. Modifica la proprietà `brand` in 'Lamborghini'.
5. Elimina la proprietà `startEngine` usando `delete`.
6. Usa un ciclo `for...in` per stampare tutte le chiavi dell’oggetto `car`.

   // Risultato atteso (in console):
// brand
// year
// color
====================================== */

const car = {
  brand: "Ferrari",
  year: 2022,
  startEngine() {
    console.log("Motore acceso!");
  },
};
const carYear = car.year;
console.log(carYear);
car["color"] = "rosso";
car.brand = "Lamborghini";
delete car.startEngine;
for (let key in car) {
  console.log(key);
}
