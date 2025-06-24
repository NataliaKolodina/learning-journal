// 3-10_JS,Objects,Accessing-Properties
/* ======================================
ESERCIZIO: Accedere a proprietà usando il punto e salvare il valore in una variabile

1. Crea una costante chiamata `car` e assegna un oggetto con le seguenti proprietà:
   - `brand`: con valore `'Toyota'`
   - `year`: con valore `2020`
2. Crea una costante `carBrand` e assegna il valore della proprietà `brand` usando la notazione con il punto.
3. Usa `console.log()` per stampare `carBrand`.
   // Risultato atteso nella console:
   // 'Toyota'
4. Crea una costante `carYear` e assegna il valore della proprietà `year` usando la notazione con il punto.
5. Usa `console.log()` per stampare `carYear`.
   // Risultato atteso nella console:
   // 2020
====================================== */

/* ======================================
ESERCIZIO: Aggiungere una proprietà a un oggetto e salvare il risultato in una variabile

1. Crea una costante chiamata `student` e assegna un oggetto con una sola proprietà:
   - `name`: con valore `'Anna'`
2. Aggiungi una nuova proprietà `enrolled` con valore `true` usando la notazione con il punto.
3. Crea una costante `isEnrolled` e assegnale il valore della proprietà `enrolled` dell’oggetto `student`.
4. Usa `console.log()` per stampare `isEnrolled`.
   // Risultato atteso nella console:
   // true
====================================== */

const car = {
  brand: "Toyota",
  year: 2020,
};
const carBrand = car.brand;
console.log(carBrand);
const carYear = car.year;
console.log(carYear);

const student = {
  name: "Anna",
};
student.enrolled = true;
const isEnrolled = student.enrolled;
console.log(isEnrolled);
