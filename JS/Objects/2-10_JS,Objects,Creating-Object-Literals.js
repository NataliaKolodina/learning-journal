// 2-10_JS,Objects,Creating-Object-Literals
/* ======================================
ESERCIZIO 1: Creare un oggetto con proprietà specifiche
Crea una variabile chiamata `car` e assegnale un oggetto letterale che contenga esattamente le seguenti coppie chiave-valore:

- Il tipo di carburante con chiave 'fuelType' e valore 'gasoline'
- Il colore con chiave `color` e valore `red`

1. Crea una variabile `car` utilizzando `let` e assegnale un oggetto letterale.
2. All’interno dell’oggetto, aggiungi la chiave `fuelType` con valore `gasoline`.
3. Aggiungi la chiave `color` con valore `red`.
4. Stampa l’oggetto `car` nella console per verificare il risultato.

Risultato atteso nella console:
{ fuelType: 'gasoline', color: 'red' }
====================================== */

/* ======================================
ESERCIZIO 2: Aggiungere un’altra proprietà a un oggetto
Hai già un oggetto chiamato `car` che contiene due proprietà. Ora devi aggiungere una nuova coppia chiave-valore:

- La chiave deve essere `'number of doors'` e il valore deve essere `4`

1. Usa la notazione con parentesi quadre per aggiungere una nuova proprietà all’oggetto `car`.
2. Imposta la chiave `'number of doors'` con valore numerico 4.
3. Stampa nuovamente l’oggetto `car` nella console per verificare che la proprietà sia stata aggiunta correttamente.

Risultato atteso nella console:
{ fuelType: 'gasoline', color: 'red', 'number of doors': 4 }
====================================== */

let car = {
  fuelType: "gasoline",
  color: "red",
};
console.log(car);

car["number of doors"] = 4;
console.log(car);
