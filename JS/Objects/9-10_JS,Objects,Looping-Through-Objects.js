// 9-10_JS,Objects,Looping-Through-Objects
/* ======================================
ESERCIZIO 1: Stampare i ruoli dell’equipaggio
Hai un oggetto chiamato spaceship che contiene una proprietà crew.
Ogni membro dell’equipaggio è rappresentato come una proprietà di crew,
e contiene un oggetto con nome, laurea e un metodo.

1. Crea una variabile spaceship.
2. Assegna a spaceship una proprietà crew che contiene 3 membri:
   - captain, con proprietà name: 'Lily' e degree: 'Computer Engineering'
   - pilot, con proprietà name: 'Shawn' e degree: 'Aerospace Engineering'
   - engineer, con proprietà name: 'Sofia' e degree: 'Mechanical Engineering'
3. Usa un ciclo for...in per iterare su ogni membro in spaceship.crew.
4. Per ogni iterazione, stampa in console il nome della proprietà (degree).
   // Risultato atteso nella console:
   // captain
   // pilot
   // engineer
5. Esegui il codice per visualizzare il risultato.
====================================== */

/* ======================================
ESERCIZIO 2: Stampare nome e laurea di ogni membro
Continua a lavorare con l’oggetto spaceship dell’esercizio precedente.

1. Aggiungi al ciclo for...in un secondo console.log().
2. Oltre a stampare il ruolo, stampa il nome e la laurea del membro.
   // Risultato atteso nella console:
   // captain: Lily, Computer Engineering
   // pilot: Shawn, Aerospace Engineering
   // engineer: Sofia, Mechanical Engineering
3. Esegui il codice per visualizzare il risultato.
====================================== */

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
    },
    pilot: {
      name: "Shawn",
      degree: "Aerospace Engineering",
    },
    engineer: {
      name: "Sofia",
      degree: "Mechanical Engineering",
    },
  },
};
for (let role in spaceship.crew) {
  console.log(role);
}

for (let item in spaceship.crew) {
  console.log(
    `${item}: ${spaceship.crew[item].name}, ${spaceship.crew[item].degree}`
  );
}
