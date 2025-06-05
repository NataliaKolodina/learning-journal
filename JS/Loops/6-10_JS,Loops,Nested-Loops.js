// 6-10_JS,Loops,Nested-Loops

/* ======================================
EXERCISE 1: Confronta elementi comuni in due array
Scrivi uno script che confronti due array e stampi nella console i numeri che si trovano in entrambi gli array.

1. Crea un array chiamato `inventoryA` con esattamente questi valori, in quest’ordine: `12`, `45`, `33`
2. Crea un altro array chiamato `inventoryB` con esattamente questi valori, in quest’ordine: `77`, `33`, `12`
3. Scrivi un ciclo `for` esterno che:
   - Usa una variabile chiamata `i` come contatore
   - Inizia da 0 e continua finché `i` è minore della lunghezza di `inventoryA`
4. All'interno del primo ciclo, scrivi un secondo ciclo `for` annidato che:
   - Usa una variabile chiamata `j` come contatore
   - Inizia da 0 e continua finché `j` è minore della lunghezza di `inventoryB`
5. All’interno del ciclo annidato, confronta se `inventoryA[i]` è uguale a `inventoryB[j]`
6. Se i valori sono uguali, stampa nella console la stringa:
   `"Match found: "` seguita dal valore uguale

// Risultato previsto sulla console:
// Match found: 12
// Match found: 33

Salva le modifiche, aggiorna la pagina ed esegui il codice per vedere l'output.
====================================== */

/* ======================================
EXERCISE 2: Trova nomi duplicati tra due liste
Scrivi uno script che controlla se ci sono nomi duplicati tra due elenchi e stampa i nomi duplicati nella console.

1. Crea un array chiamato `listA` con esattamente questi valori, in quest’ordine: `"Anna"`, `"Luca"`, `"Paolo"`
2. Crea un altro array chiamato `listB` con esattamente questi valori, in quest’ordine: `"Luca"`, `"Maria"`, `"Anna"`
3. Scrivi un ciclo `for` esterno con una variabile `a`, che itera su ogni elemento di `listA`
4. All’interno, scrivi un ciclo `for` annidato con una variabile `b`, che itera su ogni elemento di `listB`
5. Se l’elemento `listA[a]` è uguale a `listB[b]`, stampa nella console la stringa:
   `"Duplicate name: "` seguita dal nome duplicato

// Risultato previsto sulla console:
// Duplicate name: Anna
// Duplicate name: Luca

Salva le modifiche, aggiorna la pagina ed esegui il codice per controllare se i risultati sono corretti.
====================================== */

const inventoryA = [12, 45, 33];
const inventoryB = [77, 33, 12];
for (let i = 0; i < inventoryA.length; i++) {
  for (let j = 0; j < inventoryB.length; j++) {
    if (inventoryA[i] === inventoryB[j]) {
      console.log(`Match found: ${inventoryA[i]}`);
    }
  }
}

const listA = ["Anna", "Luca", "Paolo"];
const listB = ["Luca", "Maria", "Anna"];
for (let a = 0; a < listA.length; a++) {
  for (let b = 0; b < listB.length; b++) {
    if (listA[a] === listB[b]) {
      console.log(`Duplicate name: ${listA[a]}`);
    }
  }
}
