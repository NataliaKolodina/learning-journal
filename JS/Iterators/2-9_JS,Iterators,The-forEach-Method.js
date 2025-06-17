// 2-9_JS,Iterators,The-forEach-Method
/* ======================================
ESERCIZIO 1: Utilizzare .forEach() con una funzione anonima

1. Crea un array chiamato `tasks` con i seguenti elementi: "Wash dishes", "Buy groceries", "Pay bills".
2. Usa il metodo `.forEach()` su `tasks`.
3. Passa una funzione freccia come callback per stampare ogni elemento dell’array nella console.
   // Risultato atteso in console: Wash dishes, Buy groceries, Pay bills (ognuno su una nuova riga)

Salva il file, esegui il codice e verifica l'output.
// ====================================== */

/* ======================================
ESERCIZIO 2: Usare una funzione esterna con .forEach()

1. Crea una funzione chiamata `logTask` che prende un parametro e lo stampa nella console.
2. Crea un array chiamato `todayTasks` con i seguenti elementi: "Read book", "Clean room", "Exercise".
3. Chiama il metodo `.forEach()` su `todayTasks` e passa `logTask` come callback.
   // Risultato atteso in console: Read book, Clean room, Exercise (ognuno su una nuova riga)

Salva il file, esegui il codice e verifica l'output.
====================================== */

const tasks = ["Wash dishes", "Buy groceries", "Pay bills"];
tasks.forEach((task) => console.log(task));

function logTask(task) {
  console.log(task);
}
const todayTasks = ["Read book", "Clean room", "Exercise"];
todayTasks.forEach(logTask);
