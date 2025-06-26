// 4-11_JS,Advanced-Objects,Privacy
/* ======================================
ESERCIZIO 1: Convenzione di privacy con underscore
1. Crea un oggetto chiamato `user` con la seguente proprietà: - `_password`: 'abc123'
2. Aggiungi un metodo `showPassword` che stampa: "La password è: abc123" (usa `this._password` per ottenere il valore).
3. Esegui `user.showPassword()` e verifica l’output. // Risultato atteso: La password è: abc123
4. Ora cambia direttamente la proprietà `_password` in 'hack999'.
5. Esegui di nuovo `user.showPassword()` per vedere l’effetto della modifica. // Risultato atteso: La password è: hack999
====================================== */
/* ======================================
ESERCIZIO 2: Conseguenze dell'accesso diretto
1. Crea un nuovo oggetto chiamato `account` con la proprietà: - `_balance`: 500
2. Aggiungi un metodo `displayBalance` che stampa: "Saldo corrente: 500" (usa `this._balance` per mostrare il saldo).
3. Esegui `account.displayBalance()`. // Risultato atteso: Saldo corrente: 500
4. Cambia il valore di `_balance` direttamente in 999999.
5. Esegui di nuovo `account.displayBalance()`. // Risultato atteso: Saldo corrente: 999999
6. In un commento, spiega perché sarebbe utile impedire modifiche dirette a `_balance`.
====================================== */

const user = {
  _password: "abc123",
  showPassword() {
    console.log(`La password è: ${this._password}`);
  },
};
user.showPassword();
user._password = "hack999";
user.showPassword();

const account = {
  _balance: 500,
  displayBalance() {
    console.log(`Saldo corrente: ${this._balance}`);
  },
};
account.displayBalance();
account._balance = 999999;
account.displayBalance();
// Allowing direct modification of `_balance` is unsafe because it bypasses any checks or business logic.
// It's better to make `_balance` private and provide controlled methods to update it safely,
// for example using getters and setters or closures.
