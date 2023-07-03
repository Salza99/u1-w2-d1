/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype JS sono:
1. stringa = Un unico o una sequenza di caratteri numerici e non, delimitati da apici all'inizio e alla fine della riga che ne racchiudono il contenuto.
2. numeri = Caratteri unicamente numerici inseriti senza alcun apice.
3. booleani = Rispondono ai valori unici di "true" e "false" ed è utile a ottenere responsi dal programma quando si pongono delle condizioni ad una determinata operazione.
4. undefined = Datatypes che definisce quando un valore non è stato assegnato alcun valore e dunque indica l'assenza di un oggetto.
5. null = Null è simile a undefined l'unica differenza è che questo indica l'assenza intenzionale dell'oggetto in questione. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Davide";
/*console.log(name)*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12;
let number2 = 20;
window.alert(number1 + number2);
/*console.log(number1 + number2);
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
/*console.log(x);*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Salzani";
window.alert(my_Name);
//console.log(my_Name);
/*const my_Cnt_Name = "Davide";
my_Cnt_Name = "Salzani";*/
//console.log(my_Cnt_Name); //questo non funzionerà è restituirà errore poichè const è un valore costante che non consente un cambiamento di valore

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
window.alert(4 - x);
//console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
/*console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);*/
window.alert(name1 === name2);
window.alert(name1.toLowerCase() === name2.toLowerCase()); // questa applicazione di metodo l'ho cercata su google
