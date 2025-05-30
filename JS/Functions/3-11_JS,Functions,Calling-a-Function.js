// 3-11_JS,Functions,Calling-a-Function
/* ======================================
🔸 EXERCISE 1: Creare e chiamare una funzione più volte
1. Crea una funzione con nome `showAlert` usando la dichiarazione di funzione.
2. All’interno della funzione, stampa nel terminale la stringa: "Attenzione!"
3. Dopo aver dichiarato la funzione, chiamala tre volte consecutive per visualizzare il messaggio tre volte.
   // Attenzione!
   // Attenzione!
   // Attenzione!
4. Salva le modifiche ed esegui il codice per verificare il risultato nel terminale.
====================================== */
/* ======================================
🔸 EXERCISE 2: Dichiarare più funzioni e chiamarle nell'ordine corretto
1. Crea una funzione chiamata `openApp` che stampa nel terminale: "Applicazione avviata"
2. Crea una seconda funzione chiamata `loadData` che stampa: "Dati caricati"
3. Crea una terza funzione chiamata `closeApp` che stampa: "Applicazione chiusa"
4. Dopo aver dichiarato tutte le funzioni, chiamale in quest’ordine:
   - prima `openApp`
   - poi `loadData`
   - infine `closeApp`
   // Applicazione avviata
   // Dati caricati
   // Applicazione chiusa
5. Salva le modifiche ed esegui il codice per verificare che l’ordine di esecuzione sia corretto.
====================================== */

function showAlert() {
  console.log("Attenzione!");
}
showAlert();
showAlert();
showAlert();

function openApp() {
  console.log("Applicazione avviata");
}

function loadData() {
  console.log("Dati caricati");
}
function closeApp() {
  console.log("Applicazione chiusa");
}
openApp();
loadData();
closeApp();
