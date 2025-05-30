// 1-7_JS,Scope,Scope-Intro
/* ======================================
🔸 ESERCIZIO 1: Verifica dell'accesso a variabili globali e locali
1. Crea un file HTML con un elemento `<script>` inserito prima del tag di chiusura `</body>`.
2. All’interno dello `<script>`, dichiara una variabile globale `let sky = "stars";`.
3. Crea una funzione chiamata `cityView` che:
   - Dichiara una variabile locale `let view = "river";`.
   - Stampa nel console log il valore della variabile `view`. // Output atteso: river
   - Stampa nel console log il valore della variabile `sky`. // Output atteso: stars
4. Al di fuori della funzione, prova a stampare nel console log la variabile `view`. // Output atteso: Errore - view is not defined
5. Salva le modifiche, ricarica la pagina nel browser e apri la console per verificare gli output.
====================================== */
/* ======================================
🔸 ESERCIZIO 2: Scope e ridefinizione di variabili
1. All’interno dello stesso file HTML, nel tag `<script>`, definisci una variabile globale `let animal = "cat";`.
2. Crea una funzione `changeAnimal` che:
   - Dichiara una variabile locale con lo stesso nome `let animal = "dog";`.
   - Stampa nel console log il valore della variabile `animal`. // Output atteso: dog
3. Al di fuori della funzione, stampa il valore della variabile `animal`. // Output atteso: cat
4. Chiama la funzione `changeAnimal()`.
5. Salva le modifiche, ricarica la pagina nel browser e controlla nella console che gli output siano corretti e distinti per scope.
====================================== */


