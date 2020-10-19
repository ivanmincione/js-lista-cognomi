// Esercitazione di oggi: lista cognomi

// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).


// Creation array with casual surname
var surname = ["Verdi","Bianchi", "Rossi","Neri","Ferrari","Costa","Fontana","Leone","Ferrara","Testa","Paperino","Topolino","Pluto"]
// console.log(surname);

// Input client surname
//  LA PRIMA LETTERA DEL COGNOME DEVE ESSERE IN MAIUSCOLO
var inputSurname = prompt("Inserisci il tuo cognome - La prima lettera deve essere in MAIUSCOLO");

// insert client surname inside the array
surname.push(inputSurname);
// console.log(inputSurname);

// print surname list in alphabetic order
surname.sort();
console.log(surname);

// position of inputSurname inside of array after alphabetic order
console.log("Il tuo cognome si trova in posizione : " + surname.indexOf(inputSurname));
