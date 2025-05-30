// 10-11_JS,Functions,Concise-Body-Arrow-Functions
/* ======================================
ESERCIZIO 1: Creare e invocare funzioni con la sintassi freccia
1. Dichiarare una costante chiamata calculateRectangleArea e assegnarle una funzione freccia che:
   - accetti due parametri: width e height
   - calcoli l’area moltiplicando i due parametri
   - restituisca il risultato
2. Dichiarare una costante chiamata rectangleAreaResult e assegnarle il risultato della chiamata alla funzione calculateRectangleArea passando i numeri 4 e 6 come argomenti.
3. Stampare il valore di rectangleAreaResult nella console.
   // Output previsto: 24
4. Salvare le modifiche ed eseguire il codice per verificare il risultato.
====================================== */
/* ======================================
ESERCIZIO 2: Convertire i gradi Celsius in Fahrenheit con funzioni di supporto
1. Dichiarare una funzione freccia chiamata multiplyByNineFifths che:
   - accetti un parametro: number
   - restituisca il risultato della moltiplicazione di number per 9/5
2. Dichiarare una funzione freccia chiamata getFahrenheit che:
   - accetti un parametro: celsius
   - utilizzi multiplyByNineFifths per trasformare il valore celsius
   - aggiunga 32 al risultato e lo restituisca
3. Dichiarare una costante chiamata fahrenheitResult e assegnarle il risultato della chiamata a getFahrenheit passando 25 come argomento.
4. Stampare il valore di fahrenheitResult nella console.
   // Output previsto: 77
5. Salvare le modifiche ed eseguire il codice per verificare il risultato.
====================================== */

const calculateRectangleArea = (width, height) => width * height;
const rectangleAreaResult = calculateRectangleArea(4, 6);
console.log(rectangleAreaResult);

const multiplyByNineFifths = (number) => number * (9 / 5);
const getFahrenheit = (celsius) => multiplyByNineFifths(celsius) + 32;
const fahrenheitResult = getFahrenheit(25);
console.log(fahrenheitResult);
