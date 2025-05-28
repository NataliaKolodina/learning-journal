// 10-11_JS,Conditional-Statements,The-switch-keyword
/* ======================================
 🔸 EXERCISE 1: Calcolare il prezzo della spesa
Crea una variabile chiamata productName e assegnale la stringa 'lime'.
Crea una dichiarazione switch basata sul valore di productName.
Aggiungi un caso per 'tomato' che stampi "Tomatoes are $0.49" // Risultato atteso: (non verrà stampato)
Aggiungi un caso per 'lime' che stampi "Limes are $1.49" // Risultato atteso: Limes are $1.49
Aggiungi un caso per 'papaya' che stampi "Papayas are $1.29" // Risultato atteso: (non verrà stampato)
Aggiungi un caso default che stampi "Invalid item" // Risultato atteso: (non verrà stampato)
Ricorda di inserire break in ogni blocco di caso per evitare che vengano eseguiti anche i casi successivi.
Esegui il codice per controllare che venga stampato "Limes are $1.49".
 ====================================== */
/* ======================================
 🔸 EXERCISE 2: Determinare il giorno della settimana
Crea una variabile chiamata currentDay e assegnale la stringa 'Sunday'.
Scrivi una dichiarazione switch basata sul valore di currentDay.
Aggiungi un caso per 'Monday' che stampi "Start of the work week" // Risultato atteso: (non verrà stampato)
Aggiungi un caso per 'Friday' che stampi "Almost the weekend!" // Risultato atteso: (non verrà stampato)
Aggiungi un caso per 'Sunday' che stampi "Rest and recharge" // Risultato atteso: Rest and recharge
Aggiungi un caso default che stampi "Just a regular day" // Risultato atteso: (non verrà stampato)
Usa break alla fine di ogni blocco case.
Esegui il codice per assicurarti che venga stampato "Rest and recharge".
 ====================================== */

let productName = "lime";
switch (productName) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}

let currentDay = "Sunday";
switch (currentDay) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  case "Sunday":
    console.log("Rest and recharge");
    break;
  default:
    console.log("Just a regular day");
    break;
}
