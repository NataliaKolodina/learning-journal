// 7-7_JS,Scope,Review-Scope

/* ====================================== 
🔸 ESERCIZIO 1: Dichiarare e testare gli ambiti delle variabili dentro e fuori i blocchi
1. Dichiarare una variabile globale chiamata globalMessage con let e assegnarle la stringa "Hello from global".
2. Creare una funzione chiamata testScope.
3. All'interno di testScope, dichiarare una variabile localMessage con let e assegnarle la stringa "Hello from local".
4. Aggiungere un blocco if che viene sempre eseguito (if true).
5. All'interno del blocco if, dichiarare una variabile blockMessage con let e assegnarle la stringa "Hello from block".
6. Stampare blockMessage nella console all'interno del blocco if.
   // Output previsto: "Hello from block"
7. Stampare localMessage nella console fuori dal blocco if ma dentro testScope.
   // Output previsto: "Hello from local"
8. Stampare globalMessage nella console fuori dalla funzione.
   // Output previsto: "Hello from global"
9. Provare a stampare localMessage nella console fuori dalla funzione.
   // Output previsto: ReferenceError (localMessage is not defined)
10. Chiamare la funzione testScope().
*/
/* ====================================== 
🔸 ESERCIZIO 2: Prevenire l'inquinamento dello scope usando nomi e ambiti unici
1. Dichiarare una costante globale chiamata status con valore "active".
2. Creare una funzione chiamata statusCheck.
3. All'interno di statusCheck, dichiarare una variabile statusMessage con let e assegnarle "Function status active".
4. Aggiungere un blocco if che verifica se status è uguale a "active".
5. All'interno del blocco if, dichiarare una variabile statusDetail con let e assegnarle "User is active".
6. Stampare statusDetail nella console all'interno del blocco if.
   // Output previsto: "User is active"
7. Stampare statusMessage nella console fuori dal blocco if ma dentro statusCheck.
   // Output previsto: "Function status active"
8. Stampare status nella console fuori dalla funzione.
   // Output previsto: "active"
9. Provare a stampare statusMessage nella console fuori dalla funzione.
   // Output previsto: ReferenceError (statusMessage is not defined)
10. Chiamare la funzione statusCheck().
*/




